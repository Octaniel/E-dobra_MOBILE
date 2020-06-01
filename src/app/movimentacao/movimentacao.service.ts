import {Injectable} from '@angular/core';
import {MoneyHttp} from '../seguranca/money-http';
import {environment} from '../../environments/environment';
import {HttpParams} from '@angular/common/http';
import {Movimentacao} from '../core/model';

export class MovimentacaoFilter{
  quantidadeSaldo: number;
  codigoCliente: string;
  tipoMovimentacao: string;
  estilo: string;
  pagina = 0;
  itensPorPagina = 3;

}

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  lancamentosUrl: string;

  constructor(private http: MoneyHttp) {
    this.lancamentosUrl = `${environment.apiUrl}/movimentacao`;
  }

  urlUploadAnexo(): string {
    return `${this.lancamentosUrl}/anexo`;
  }

  pesquisar(filtro: MovimentacaoFilter): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.codigoCliente) {
      params = params.append('codigoCliente', filtro.codigoCliente);
    }

    if (filtro.estilo) {
      params = params.append('estilo', filtro.estilo);
    }

    if (filtro.quantidadeSaldo) {
      params = params.append('quantidadeSaldo', filtro.quantidadeSaldo.toString());
    }

    if (filtro.tipoMovimentacao) {
      params = params.append('tipoMovimentacao', filtro.tipoMovimentacao);
    }

    return this.http.get<any>(`${this.lancamentosUrl}?resumo`,
        { params })
        .toPromise()
        .then(response => {
          const movimentos = response.content;

          return {
            movimentos,
            total: response.totalElements
          };
        });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`)
        .toPromise()
        .then(() => null);
  }

  adicionar(movimentacao: Movimentacao): Promise<Movimentacao> {
    return this.http.post<Movimentacao>(this.lancamentosUrl, movimentacao)
        .toPromise();
  }

  atualizar(movimentacao: Movimentacao): Promise<Movimentacao> {
    return this.http.put<Movimentacao>(`${this.lancamentosUrl}/${movimentacao.id}`, movimentacao)
        .toPromise()
        .then(response => {
          //this.converterStringsParaDatas([movimentacaoAlterado]);

          return response;
        });
  }

  buscarPorCodigo(codigo: number): Promise<Movimentacao> {
    return this.http.get<Movimentacao>(`${this.lancamentosUrl}/${codigo}`)
        .toPromise()
        .then(response => {
          //this.converterStringsParaDatas([lancamento]);

          return response;
        });
  }

 /* private converterStringsParaDatas(lancamentos: Movimentacao[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
          'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
            'YYYY-MM-DD').toDate();
      }
    }
  }*/
}
