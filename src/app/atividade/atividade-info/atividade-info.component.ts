import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovimentacaoService} from '../../movimentacao/movimentacao.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {Movimentacao} from '../../core/model';

@Component({
  selector: 'app-atividade-info',
  templateUrl: './atividade-info.component.html',
  styleUrls: ['./atividade-info.component.scss'],
})
export class AtividadeInfoComponent implements OnInit {

  movimentacao = new Movimentacao();

  constructor(
      private route: ActivatedRoute,
      private movimentacaoService: MovimentacaoService,
      private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    const idMovimentacao = this.route.snapshot.params['id'];
    if (idMovimentacao) {
      this.carregarMovimentacao(idMovimentacao);
    }
  }

  private carregarMovimentacao(id) {
    console.log(id);
    this.movimentacaoService.buscarPorCodigo(id)
        .then(movimentacao => {
          this.movimentacao = movimentacao;
        })
        .catch(erro => this.errorHandler.handle(erro));
  }
}
