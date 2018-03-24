import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClienteService } from './cliente.service';
import { ClientesResolve } from './clientes.resolve';
import { MaterialModule } from '../material/material.module';

import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { IncluirClienteComponent } from './incluir-cliente/incluir-cliente.component';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    ListarClienteComponent,
    IncluirClienteComponent
  ],
  providers: [
    ClienteService,
    ClientesResolve
  ],
  entryComponents: [
    IncluirClienteComponent
  ]
})
export class ClienteModule { }
