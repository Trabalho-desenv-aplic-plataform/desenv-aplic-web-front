import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-usuario',
  templateUrl: './add-edit-usuario.component.html',
  styleUrls: ['./add-edit-usuario.component.css']
})
export class AddEditUsuarioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<AddEditUsuarioComponent>
  ) { }

  ngOnInit(): void {
  }

}
