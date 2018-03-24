import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { ContatoModule } from '../contato/contato.module';
import { ClienteModule } from '../cliente/cliente.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ClienteModule,
    ContatoModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
