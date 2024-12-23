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
import { SideBarComponent } from './features/side-bar/side-bar.component';
import {SidebarModule} from 'primeng/sidebar';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AddEditUsuarioComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule ,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,   
    SidebarModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent],
})
export class AppModule { }
