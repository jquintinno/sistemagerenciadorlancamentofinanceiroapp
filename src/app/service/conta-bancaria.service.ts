import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContaBancariaService {

  private ENDPOINT: string = "/conta-bancaria";

  constructor(
    private httpClient: HttpClient
  ) { }

  public searchAllTipoContaBancaria() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.url_api.concat(this.ENDPOINT).concat("/tipo"));
  }

  public cadastrarContaBancaria(contaBancariaModel: any) : Observable<any> {
    return this.httpClient.post<any>(environment.url_api.concat(this.ENDPOINT), contaBancariaModel);
  }

}
