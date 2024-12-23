import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampanhasComponent } from './campanhas.component';

const routes: Routes = [
  { path: '', component: CampanhasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampanhasRoutingModule { }
