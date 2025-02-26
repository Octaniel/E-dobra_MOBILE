import {Title} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, LOCALE_ID} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {JwtHelperService} from '@auth0/angular-jwt';

import {AuthService} from './../seguranca/auth.service';
import {ErrorHandlerService} from './error-handler.service';
import {NaoAutorizadoComponent} from './nao-autorizado.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada.component';
import {MoneyHttp} from '../seguranca/money-http';
import {FormsModule} from '@angular/forms';

registerLocaleData(localePt);

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule,

        ToastModule,
        ConfirmDialogModule,
    ],
    declarations: [
        PaginaNaoEncontradaComponent,
        NaoAutorizadoComponent
    ],
    exports: [
        ToastModule,
        ConfirmDialogModule
    ],
    providers: [
        ErrorHandlerService,
        AuthService,
        MoneyHttp,

        ConfirmationService,
        MessageService,
        JwtHelperService,
        Title,
        {provide: LOCALE_ID, useValue: 'pt'}
    ]
})
export class CoreModule {
}
