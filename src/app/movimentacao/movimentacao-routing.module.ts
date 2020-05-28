import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {PagarComponent} from './pagar/pagar.component';
import {PedirSaldoComponent} from './pedir-saldo/pedir-saldo.component';
import {RetirarComponent} from './retirar/retirar.component';
import {AuthGuard} from '../seguranca/auth.guard';
import {TransferirComponent} from './transferir/transferir.component';

const routes: Routes = [
    {
        path: 'pagar',
        component: PagarComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'pedirSaldo',
        component: PedirSaldoComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'retirar',
        component: RetirarComponent ,
        canActivate: [AuthGuard],
    },
    {
        path: 'transferir',
        component: TransferirComponent ,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MovimentacaoRoutingModule { }
