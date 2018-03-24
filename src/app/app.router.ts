import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/home.router';

export const routes: Routes = [
    ...HomeRoutes
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);