import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { Http } from '@angular/http';
import { Observer } from 'rxjs/Observer';

/**
 * Classe de serviço referente ao Cliente.
 */
@Injectable()
export class ClienteService {

  constructor(private http: Http) { }

  /**
   * Salva o cliente informado.
   * 
   * @param cliente 
   */
  public salvar(cliente): Observable<any> {
    return this.http.post('https://squadra-minicurso.herokuapp.com/clientes', cliente).map((response: Response) => {
      return response.json();
    }).catch((response: Response) => {
      let error = response.json();
      return Observable.throw(error.mensagem);
    });
  }

  /**
   * Recupera todos os clientes registrados na base de dados.
   */
  public getClientes(): Observable<any> {
    return this.http.get('https://squadra-minicurso.herokuapp.com/clientes').map((response: Response) => {
      return response.json();
    }).catch((response: Response) => {
      let error = response.json();
      return Observable.throw(error.mensagem);
    });
  }
}

