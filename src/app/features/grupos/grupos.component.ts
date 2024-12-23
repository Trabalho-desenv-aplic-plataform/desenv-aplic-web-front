import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService } from 'src/shared/services/dialog-service.service';
import { AddEditGruposComponent } from './components/add-edit-grupos/add-edit-grupos.component';
import { Subject, finalize, takeUntil } from 'rxjs';
import { Actions } from 'src/shared/interfaces/actions';
import { Column } from 'src/shared/interfaces/column';
import { GruposService } from './service/grupos.service';
import { DatePipe } from '@angular/common';
import { SendMessageGroupComponent } from './components/send-message-group/send-message-group.component';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
  providers: [DatePipe]
})
export class GruposComponent implements OnInit, OnDestroy {

  pagination: any = {
    pageStart: 0,
    pageSize: 10,
    currentPage: 1,
  };
  totalElements!: number;
  rows: any[] = [];

  tableColumns: Column[] = [
    {
      name: "nome",
      title: "Nome do grupo"
    },
    {
      name: "dataCriacao",
      title: "Data de criação do grupo"
    },
    {
      name: "cor",
      title: "Cor do grupo"
    }
  ]

  actions: Actions[] = [
    {
      name: "edit",
      tooltip: "Editar",
      icon: "edit",
      class: "edit"
    },
    {
      name: "delete",
      tooltip: "Excluir",
      icon: "delete_forever",
      class: "delete"
    },
    {
      name: "send-message",
      tooltip: "Enviar mensagem",
      icon: "message",
      class: "send-message"
    }
  ]

  private destroy$ = new Subject();
  constructor(
    private dialogService: DialogService,
    private service: GruposService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getList();
  }


  ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.unsubscribe();
  }

  private getList() {
    this.service.getAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.rows = response;
      },
      error: (error) => {
        console.error("[getList] Error fetching list:", error);
      }
    })
  }

  onActionClick(event: any){
    if (event.name === "delete") {
      this.service.delete(event.element.id).pipe(finalize(() => this.getList())).subscribe({
        next: (response) => {
          this.service.delete(event.element.id).subscribe((response) => {
            this.getList();
          })
        }
      })
    }
    else if (event.name === 'send-message') {
      this.sendMessageDialog(event.element);
    }
  }

  onButtonClick() {
    this.dialogService.openGenericDialog(AddEditGruposComponent, {

    })
    .afterClosed().subscribe((response: boolean) => {
      if (response) {
        this.getList();
      }
    })
  }

  sendMessageDialog(element: any) {
    this.dialogService.openGenericDialog(SendMessageGroupComponent, {
      ...element
    })
    .afterClosed().subscribe((response: boolean) => {

    });
  }
}
