import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagarComponent} from './pagar/pagar.component';
import {PedirSaldoComponent} from './pedir-saldo/pedir-saldo.component';
import {RetirarComponent} from './retirar/retirar.component';
import {TransferirComponent} from './transferir/transferir.component';
import {IonicModule} from '@ionic/angular';
import {MovimentacaoRoutingModule} from './movimentacao-routing.module';



@NgModule({
  declarations: [PagarComponent, PedirSaldoComponent, RetirarComponent, TransferirComponent],
  imports: [
    CommonModule,
    IonicModule,
    MovimentacaoRoutingModule
  ]
})
export class MovimentacaoModule { }
