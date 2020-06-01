import {Component, OnInit} from '@angular/core';
import {MovimentacaoFilter, MovimentacaoService} from '../../movimentacao/movimentacao.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {AuthService} from '../../seguranca/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    movimentacoes = [];
    clientesRemitenteMovimentacoes = new Array<clienteMovi>();

    saldo = 0;

    movimetacaoFilter = new MovimentacaoFilter();

    constructor(
        private movimentacaoService: MovimentacaoService,
        private errorHandler: ErrorHandlerService,
        private authService: AuthService,
    ) {
        this.movimetacaoFilter.codigoCliente = authService.jwtPayload.cliente.pessoa.codigo;
        this.saldo = authService.jwtPayload.cliente.pessoa.saldo;
        this.carregarmovimentacoes();
        this.carregarmovimentacoesTransferenciaDebito();
    }

    ngOnInit() {
    }

    carregarmovimentacoes() {
        return this.movimentacaoService.pesquisar(this.movimetacaoFilter)
            .then(movimetacao => {
                this.movimentacoes = movimetacao.movimentos;
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    carregarmovimentacoesTransferenciaDebito() {
        this.movimetacaoFilter.estilo = 'Transferencia';
        this.movimetacaoFilter.tipoMovimentacao = 'DEBITO';
        this.movimetacaoFilter.itensPorPagina = 5;
        return this.movimentacaoService.pesquisar(this.movimetacaoFilter)
            .then(movimetacao => {
                movimetacao.movimentos.forEach(x => {
                    if (x.cliente2&&!this.verificar(x.cliente2)) {
                        let movi = new clienteMovi();
                        movi.nome = x.cliente2;
                        if (x.cliente2.indexOf(' ') != -1) {
                            movi.resumoNome = x.cliente2.charAt(0) + x.cliente2.charAt(x.cliente2.indexOf(' ') + 1).toUpperCase();
                        } else {
                            movi.resumoNome = x.cliente2.charAt(0) + x.cliente2.charAt(1).toUpperCase();
                        }
                        this.clientesRemitenteMovimentacoes.push(movi);
                    }
                });
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    private verificar(cliente2: string) {
        let bool = false;
        this.clientesRemitenteMovimentacoes.forEach(x => {
            if (x.nome == cliente2) {
                bool = true;
            }
        })
        return bool;
    }


}

class clienteMovi {
    nome: string;
    resumoNome: string;
}
