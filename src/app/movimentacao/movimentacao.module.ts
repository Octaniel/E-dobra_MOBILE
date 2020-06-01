import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagarComponent} from './pagar/pagar.component';
import {PedirSaldoComponent} from './pedir-saldo/pedir-saldo.component';
import {RetirarComponent} from './retirar/retirar.component';
import {TransferirComponent} from './transferir/transferir.component';
import {IonicModule} from '@ionic/angular';
import {MovimentacaoRoutingModule} from './movimentacao-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EnviarAComponent} from './enviar-a/enviar-a.component';
import {ConcluirEnvioComponent} from './concluir-envio/concluir-envio.component';


@NgModule({
    declarations: [PagarComponent, PedirSaldoComponent, RetirarComponent, TransferirComponent, EnviarAComponent, ConcluirEnvioComponent],
    imports: [
        CommonModule,
        IonicModule,
        MovimentacaoRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MovimentacaoModule {
}
