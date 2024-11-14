import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService } from 'src/shared/services/dialog-service.service';
import { ContatosService } from './service/contatos.service';
import { Column } from 'src/shared/interfaces/column';
import { title } from 'process';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Actions } from 'src/shared/interfaces/actions';
import { Subject, finalize, takeUntil } from 'rxjs';
import { error } from 'console';
import { DatePipe } from '@angular/common';
//import { AddEditContatosComponent } from '../grupos/components/add-edit-grupos/add-edit-grupos.component';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  providers: [DatePipe]
})
export class ContatosComponent implements OnInit, OnDestroy {

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
      title: "Nome"
    },
    {
      name: "numero",
      title: "Telefone"
    },
    {
      name: "grupoId",
      title: "Grupos"
    },
    {
      name: "status",
      title: "Status"
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
    }
  ]

  private destroy$ = new Subject();
  constructor(
    private dialogService: DialogService,
    private service: ContatosService,
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

  onActionClick(event: any) {
    console.log("[onActionClick]", event);
    if (event.name === "delete") {
      this.service.delete(event.element.id).pipe(finalize(() => this.getList())).subscribe({
        next: (response) => {
          this.service.delete(event.element.id).subscribe((response) => {
            this.getList();
          })
        }
      })
    }
  }

  //onButtonClick() {
  //  this.dialogService.openGenericDialog(AddEditContatosComponent)
  //}

}
