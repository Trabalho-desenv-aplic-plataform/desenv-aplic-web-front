import { Component, OnInit } from '@angular/core';
import { Actions } from 'src/shared/interfaces/actions';
import { Column } from 'src/shared/interfaces/column';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  pagination: any = {
    pageStart: 0,
    pageSize: 10,
    currentPage: 1,
  };
  totalElements!: number;
  rows: any[] = [];

  columns: Column[] = [
    {
      name: "name",
      title: "Nome do usuário"
    },
    {
      name: "email",
      title: "E-mail"
    },
    {
      name: "senha",
      title: "Senha"
    },
    {
      name: "tipo",
      title: "Tipo do usuário"
    }
  ]

  actions: Actions[] = [
    {
      name: "delete",
      icon: "delete_forever",
      tooltip: "Deletar"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
