import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContatosService } from '../../service/contatos.service';
import { GruposService } from 'src/app/features/grupos/service/grupos.service';

@Component({
    selector: 'app-add-edit-contatos',
    templateUrl: './add-edit-contatos.component.html',
    styleUrls: ['./add-edit-contatos.component.css']
})
export class AddEditContatosComponent implements OnInit {

    grupoList: any = [];
    grupoId!: number;

    constructor(
        public vcRef: ViewContainerRef,
        private dialogRef: MatDialogRef<AddEditContatosComponent>,
        private service: ContatosService,
        private grupoService: GruposService
    ) {}

    ngOnInit(): void {
        this.getGrupos();
    }

    public onEventLog(event: string, data: any): void {
        console.log(event, data);
    }

    private getGrupos() {
        this.grupoService.getAll().subscribe({
            next: (response) => {
                console.log("[getGrupos]", response);
                this.grupoList = response;
            }
        });
    }

    name: string = '';
    numero!: string;

    generatePayload() {
        const payload = {
            nome: this.name,
            numero: this.numero,
            grupoId: this.grupoId
        };

        this.service.post(payload).subscribe({
            next: (response) => {
                this.dialogRef.close(true);
            }
        })
    }

    exit(response = false) {
        this.dialogRef.close(response);
    }
}
