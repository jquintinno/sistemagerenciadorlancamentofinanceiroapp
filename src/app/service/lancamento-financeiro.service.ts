import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LancamentoFinanceiroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public recuperarCategoriaLancamentoFinanceiro() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.url_api.concat("/categoria-lancamento-financeiro"));
  }

}
