import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  contatosUrl = "http://localhost:8080/api/funcionario";

  constructor(private http: HttpClient) {}

  getFuncionarioList(): Observable<any>{
    return this.http.get<any[]>(`${this.contatosUrl}`)
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  saveFuncionario(funcionario: any): Observable<any> {
    return this.http.post<any>(this.contatosUrl, JSON.stringify(funcionario), this.httpOptions)
      .pipe(
        retry(2),
      )
  }

  updateFuncionario(funcionario: any): Observable<any> {
    return this.http.put<any>(this.contatosUrl + '/' + funcionario.id, JSON.stringify(funcionario), this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  deleteFuncionario(funcionario: any) {
    return this.http.delete<any>(this.contatosUrl + '/' + funcionario.id, this.httpOptions)
      .pipe(
        retry(1),
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  }

 