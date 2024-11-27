import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContatosComponent } from './contatos.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    ContatosComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ContatosRoutingModule,
    ContatosRoutingModule,
    MatIconModule,
    FormsModule,
    ColorPickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class ContatosModule { }
