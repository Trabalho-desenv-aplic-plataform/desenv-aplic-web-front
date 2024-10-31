import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanaisEnvioComponent } from './canais-envio.component';

const routes: Routes = [
  { path: '', component: CanaisEnvioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanaisEnvioRoutingModule { }
