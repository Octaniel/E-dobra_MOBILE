import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { InfoComponent } from './info/info.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginFormComponent,
},
{ 
  path: 'registrar', 
  component: RegisterFormComponent,
},
{ 
  path: 'info', 
  component: InfoComponent ,
  canActivate: [AuthGuard],
},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
