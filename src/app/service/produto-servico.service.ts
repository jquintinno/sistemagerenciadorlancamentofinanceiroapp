import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServicoService {

  private ENDPOINT: string = "/produto-servico";

  constructor(
    private httpClient: HttpClient
  ) { }

  public createOne(produtoServico: any) : Observable<any> {
    console.log(produtoServico);
    return this.httpClient.post<any>(environment.url_api.concat(this.ENDPOINT), produtoServico);
  }

  public searchOne() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.url_api.concat(this.ENDPOINT));
  }

  public recuperarProdutoServico(nomeProdutoServico: string) : Observable<any[]> {
    const endpoint = environment.url_api.concat(this.ENDPOINT).concat("/").concat("filtro").concat("/").concat(nomeProdutoServico);
    return this.httpClient.get<any[]>(endpoint);
  }

}
