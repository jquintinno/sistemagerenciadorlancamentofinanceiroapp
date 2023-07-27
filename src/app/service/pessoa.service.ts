import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public create(pessoa: any) : Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/pessoa", pessoa);
  }

  public searchAll() : Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/pessoa");
  }

  public searchOne(codigoPessoa: number) {
    return this.httpClient.get<any>(`http://localhost:8080/pessoa/${codigoPessoa}`);
  }

  public recuperarTipoPessoa() : Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:8080/pessoa/tipo-pessoa");
  }

  public updateOne(pessoa: any) : Observable<any> {
    return this.httpClient.put<any>("http://localhost:8080/pessoa", pessoa);
  }

}
