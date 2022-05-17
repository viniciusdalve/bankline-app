
import { Injectable } from '@angular/core';
//
import { HttpClient } from '@angular/common/http';
//Pacote de requisições síncronas no pacote node
import { Observable } from 'rxjs';

//Depois mudar para a API do Heroku
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  // Recurso constructor HTTP
  constructor(private http: HttpClient) { }
  
  //Byscar as movimentações através da baseUrl
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }
  // adicionando o método de inclusão (POST) via API
create(movimentacao:any): Observable<any> {
  return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
}

findByIdConta(idConta:any): Observable<any> {
  return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
}

}
