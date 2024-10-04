import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './features/usuarios/usuarios.component';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AddEditUsuarioComponent } from './features/components/add-edit-usuario/add-edit-usuario.component';
import { GruposModule } from './features/grupos/grupos.module';
import { AppRoutingModule } from './app-routing-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AddEditUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule ,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
