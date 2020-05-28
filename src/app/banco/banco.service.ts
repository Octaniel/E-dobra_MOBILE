import { Injectable } from '@angular/core';
import {MoneyHttp} from '../seguranca/money-http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  categoriasUrl: string;

  constructor(private http: MoneyHttp) {
    this.categoriasUrl = `${environment.apiUrl}/banco`;
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.categoriasUrl)
        .toPromise();
  }
}
