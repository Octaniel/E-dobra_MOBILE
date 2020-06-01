import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtividadeRoutingModule} from './atividade-routing.module';
import {AtividadeInfoComponent} from './atividade-info/atividade-info.component';
import {AtividadeListarComponent} from './atividade-listar/atividade-listar.component';
import {IonicModule} from '@ionic/angular';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
    declarations: [AtividadeInfoComponent, AtividadeListarComponent],
    imports: [
        CommonModule,
        AtividadeRoutingModule,
        IonicModule,
        SelectButtonModule,
        TabViewModule
    ]
})
export class AtividadeModule {
}
