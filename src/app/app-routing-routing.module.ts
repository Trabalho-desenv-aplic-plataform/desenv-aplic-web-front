import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposComponent } from './features/grupos/grupos.component';

const routes: Routes = [
    {
        path: 'grupos',
        loadChildren: () => import('./features/grupos/grupos.module').then(m => m.GruposModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
