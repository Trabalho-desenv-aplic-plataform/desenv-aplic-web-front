import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanaisEnvioRoutingModule } from './canais-envio-routing.module';
import { CanaisEnvioComponent } from './canais-envio.component';


@NgModule({
  declarations: [
    CanaisEnvioComponent
  ],
  imports: [
    CommonModule,
    CanaisEnvioRoutingModule
  ]
})
export class CanaisEnvioModule { }
