import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuard} from '../seguranca/auth.guard';
import {AtividadeListarComponent} from './atividade-listar/atividade-listar.component';
import {AtividadeInfoComponent} from './atividade-info/atividade-info.component';

const routes: Routes = [
    {
        path: 'listar',
        component: AtividadeListarComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'info/:id',
        component: AtividadeInfoComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AtividadeRoutingModule { }
