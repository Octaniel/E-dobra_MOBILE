import { Component, OnInit } from '@angular/core';
import {MovimentacaoFilter, MovimentacaoService} from '../../movimentacao/movimentacao.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {AuthService} from '../../seguranca/auth.service';

@Component({
  selector: 'app-atividade-listar',
  templateUrl: './atividade-listar.component.html',
  styleUrls: ['./atividade-listar.component.scss'],
})
export class AtividadeListarComponent implements OnInit {
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];
  movimentacoes = [];
  movimetacaoFilter = new MovimentacaoFilter();
  constructor(
      private movimentacaoService: MovimentacaoService,
      private errorHandler: ErrorHandlerService,
      private authService: AuthService,
  ) {
    this.carregarmovimentacoes();
  }

  ngOnInit() {}

    mudarTab(event) {
      console.log(event.index);
      if(event.index==0){
        this.carregarmovimentacoes();
      } else if(event.index==1){
        this.carregarmovimentacoesRecebidos();
      } else{
        this.carregarmovimentacoesEnviados();
      }
    }

  carregarmovimentacoes() {
    this.movimetacaoFilter.codigoCliente = this.authService.jwtPayload.cliente.pessoa.codigo;
    this.movimetacaoFilter.itensPorPagina = 1000;
    this.movimetacaoFilter.tipoMovimentacao = null;
    return this.movimentacaoService.pesquisar(this.movimetacaoFilter)
        .then(movimetacao => {
          this.movimentacoes = movimetacao.movimentos;
        })
        .catch(erro => this.errorHandler.handle(erro));
  }

  carregarmovimentacoesRecebidos() {
    this.movimetacaoFilter.codigoCliente = this.authService.jwtPayload.cliente.pessoa.codigo;
    this.movimetacaoFilter.itensPorPagina = 1000;
    this.movimetacaoFilter.tipoMovimentacao = 'CREDITO'
    return this.movimentacaoService.pesquisar(this.movimetacaoFilter)
        .then(movimetacao => {
          this.movimentacoes = movimetacao.movimentos;
        })
        .catch(erro => this.errorHandler.handle(erro));
  }

  carregarmovimentacoesEnviados() {
    this.movimetacaoFilter.codigoCliente = this.authService.jwtPayload.cliente.pessoa.codigo;
    this.movimetacaoFilter.itensPorPagina = 1000;
    this.movimetacaoFilter.tipoMovimentacao = 'DEBITO'
    return this.movimentacaoService.pesquisar(this.movimetacaoFilter)
        .then(movimetacao => {
          this.movimentacoes = movimetacao.movimentos;
        })
        .catch(erro => this.errorHandler.handle(erro));
  }
}
