import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampanhasRoutingModule } from './campanhas-routing.module';
import { CampanhasComponent } from './campanhas.component';


@NgModule({
  declarations: [
    CampanhasComponent
  ],
  imports: [
    CommonModule,
    CampanhasRoutingModule
  ]
})
export class CampanhasModule { }
