import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, Router } from '@angular/router';

import { ContatoService } from './contato.service';
import { error } from 'util';

/**
 * Resolve responsável por recuperar todos os Contatos registrados na base de dados.
 */
@Injectable()
export class ContatosResolve implements Resolve<any> {

    constructor(private router: Router, private contatoService: ContatoService) { }

    resolve(): Observable<any> {
        return new Observable(observer => {
            this.contatoService.getContatos().subscribe(data => {
                observer.next(data);
                observer.complete();
            }, error => {
                observer.error(error);
                this.router.navigate(['']);
            });
        });
    }
}