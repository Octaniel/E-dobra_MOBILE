import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import {CardModule} from 'primeng/card';
import { RegisterFormComponent } from './register-form/register-form.component';
import { InfoComponent } from './info/info.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {SharedModule} from '../shared/shared.module';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        SegurancaRoutingModule,
        CardModule,
        ProgressBarModule,
        ReactiveFormsModule,
        SharedModule,
        CalendarModule
    ],
  declarations: [LoginFormComponent, RegisterFormComponent, InfoComponent],
  providers: [
    AuthGuard,
    LogoutService
  ]
})
export class SegurancaModule { }
