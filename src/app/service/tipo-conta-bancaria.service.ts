import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TipoContaBancariaService {

  private ENDPOINT: string = "/conta-bancaria";

  constructor(
    private httpClient: HttpClient
  ) { }

  public searchAll() : Observable<any[]> {
    return this.httpClient.get<any[]>(environment.url_api.concat(this.ENDPOINT).concat("/tipo"));
  }

}
