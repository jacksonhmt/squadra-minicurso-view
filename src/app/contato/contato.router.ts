import { Routes } from '@angular/router';

import { ContatosResolve } from './contatos.resolve';
import { ListarContatoComponent } from './listar-contato/listar-contato.component';

export const ContatoRoutes: Routes = [
    {
        path: 'contato/listar',
        component: ListarContatoComponent,
        resolve: {
            contatos: ContatosResolve
        }
    },
    {
        path: 'contato',
        redirectTo: '/contato/listar'
    }
];