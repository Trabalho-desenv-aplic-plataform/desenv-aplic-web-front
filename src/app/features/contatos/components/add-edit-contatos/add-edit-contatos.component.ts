import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContatosService } from '../../service/contatos.service';

@Component({
    selector: 'app-add-edit-contatos',
    templateUrl: './add-edit-contatos.component.html',
    styleUrls: ['./add-edit-contatos.component.css']
})
export class AddEditContatosComponent implements OnInit {

    constructor(
        public vcRef: ViewContainerRef,
        private dialogRef: MatDialogRef<AddEditContatosComponent>,
        private service: ContatosService
    ) {}

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    public onEventLog(event: string, data: any): void {
        console.log(event, data);
    }

    name: string = '';

    generatePayload() {
        const payload = {
            nome: this.name
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
