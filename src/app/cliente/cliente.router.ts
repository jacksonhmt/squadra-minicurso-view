import { Routes } from '@angular/router';

import { ClientesResolve } from './clientes.resolve';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';

export const ClienteRoutes: Routes = [
    {
        path: 'cliente/listar',
        component: ListarClienteComponent,
        resolve: {
            clientes: ClientesResolve
        }
    },
    {
        path: 'cliente',
        redirectTo: '/cliente/listar'
    }
];