import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { Http } from '@angular/http';
import { Observer } from 'rxjs/Observer';

/**
 * Classe de serviço referente ao Contato.
 */
@Injectable()
export class ContatoService {

  constructor(private http: Http) { }

  /**
   * Salva o contato informado.
   * 
   * @param contato 
   */
  public salvar(contato): Observable<any> {
    return this.http.post('https://squadra-minicurso.herokuapp.com/contatos', contato).map((response: Response) => {
      return response.json();
    }).catch((response: Response) => {
      let error = response.json();
      return Observable.throw(error.mensagem);
    });
  }

  /**
   * Recupera todos os contatos registrados na base de dados.
   */
  public getContatos(): Observable<any> {
    return this.http.get('https://squadra-minicurso.herokuapp.com/contatos').map((response: Response) => {
      return response.json();
    }).catch((response: Response) => {
      let error = response.json();
      return Observable.throw(error.mensagem);
    });
  }

}
