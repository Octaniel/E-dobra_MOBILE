import { Component, OnInit } from '@angular/core';
import {MovimentacaoFilter, MovimentacaoService} from '../movimentacao.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {AuthService} from '../../seguranca/auth.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.scss'],
})
export class TransferirComponent implements OnInit {
  contactos = [];

  movimetacaoFilter = new MovimentacaoFilter();
  constructor(
      private movimentacaoService: MovimentacaoService,
      private errorHandler: ErrorHandlerService,
      private authService: AuthService,
  ) { }

  ngOnInit() {}

  carregarcontactos() {
    return this.movimentacaoService.pesquisar(this.movimetacaoFilter)
        .then(movimetacao => {
          this.contactos = movimetacao.movimentos;
        })
        .catch(erro => this.errorHandler.handle(erro));
  }

}
