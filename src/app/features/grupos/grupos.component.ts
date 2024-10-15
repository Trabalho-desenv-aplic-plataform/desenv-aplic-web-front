import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService } from 'src/shared/services/dialog-service.service';
import { AddEditGruposComponent } from './components/add-edit-grupos/add-edit-grupos.component';
import { Subject, finalize, takeUntil } from 'rxjs';
import { Actions } from 'src/shared/interfaces/actions';
import { Column } from 'src/shared/interfaces/column';
import { GruposService } from './service/grupos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
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
    }
  ]

  private destroy$ = new Subject();
  constructor(
    private dialogService: DialogService,
    private service: GruposService
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
        console.log("[getList]", this.rows)
      },
      error: (error) => {
        console.error("[getList] Error fetching list:", error);
      }
    })
  }

  onActionClick(event: any){
    console.log("[onActionClick]", event);
    if(event.name === "delete"){
      this.service.delete(event.element.id).pipe(finalize(() => this.getList())).subscribe({
        next: (response) => {

        }
      })
    }
  }

  onButtonClick() {
    this.dialogService.openGenericDialog(AddEditGruposComponent, {

    });
  }

}
