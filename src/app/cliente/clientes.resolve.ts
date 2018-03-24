import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, Router } from '@angular/router';

import { ClienteService } from './cliente.service';
import { error } from 'util';

/**
 * Resolve responsável por recuperar todos os clientes registrados na base de dados.
 */
@Injectable()
export class ClientesResolve implements Resolve<any> {

    constructor(private router: Router, private clienteService: ClienteService) { }

    resolve(): Observable<any> {
        return new Observable(observer => {
            this.clienteService.getClientes().subscribe(data => {
                observer.next(data);
                observer.complete();
            }, error => {
                observer.error(error);
                this.router.navigate(['']);
            });
        });
    }
}