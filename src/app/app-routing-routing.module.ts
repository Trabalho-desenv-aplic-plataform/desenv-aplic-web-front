import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposComponent } from './features/grupos/grupos.component';

const routes: Routes = [
    {
        path: 'grupos',
        loadChildren: () => import('./features/grupos/grupos.module').then(m => m.GruposModule)
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./features/usuarios/usuarios.module').then(m => m.UsuariosModule)
    },
    {
        path: 'contatos',
        loadChildren: () => import('./features/contatos/contatos.module').then(m => m.ContatosModule)
    },
    {
        path: 'canais-envio',
        loadChildren: () => import('./features/canais-envio/canais-envio.module').then(m => m.CanaisEnvioModule)
    },
    {
        path: 'campanhas',
        loadChildren: () => import('./features/campanhas/campanhas.module').then(m => m.CampanhasModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
