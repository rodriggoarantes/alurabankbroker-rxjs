import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Acoes } from '../model/acoes';

import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  private readonly acoesUrl = `${environment.api}/acoes`;

  constructor(private httpClient: HttpClient) {}

  getAcoes(): Observable<Acoes> {
    return this.httpClient.get<Acoes>(`${this.acoesUrl}`);
  }
}
