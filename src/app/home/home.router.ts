import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ContatoRoutes } from './../contato/contato.router';
import { ClienteRoutes } from './../cliente/cliente.router';
import { SobreRoutes } from './../sobre/sobre.router';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            ...ContatoRoutes,
            ...ClienteRoutes,
            ...SobreRoutes
        ]
    }
];