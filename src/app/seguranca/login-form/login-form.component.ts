import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  processando = false;

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  login(usuario: string, senha: string) {
    this.processando = true;
    this.auth.login(usuario, senha)
      .then(() => {
        this.processando = false;
        this.router.navigate(['/']);
      })
      .catch(erro => {
        this.processando = false;
        this.errorHandler.handle(erro);
      });
  }

}
