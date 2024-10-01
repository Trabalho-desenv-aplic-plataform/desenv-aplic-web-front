import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruposComponent } from './grupos.component';
import { RouterModule, Routes } from '@angular/router';
import { GruposRoutingModule } from './grupos-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/shared/shared.module';
import { AddEditGruposComponent } from './components/add-edit-grupos/add-edit-grupos.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GruposComponent,
    AddEditGruposComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GruposRoutingModule,
    MatIconModule,
    FormsModule,
    ColorPickerModule
  ]
})
export class GruposModule { }
