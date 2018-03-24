import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContatoService } from './contato.service';
import { ContatosResolve } from './contatos.resolve';
import { MaterialModule } from '../material/material.module';

import { ListarContatoComponent } from './listar-contato/listar-contato.component';
import { DialogFormContatoComponent } from './dialog-form-contato/dialog-form-contato.component';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    ListarContatoComponent,
    DialogFormContatoComponent
  ],
  providers: [
    ContatoService,
    ContatosResolve
  ],
  entryComponents: [
    DialogFormContatoComponent
  ]
})
export class ContatoModule { }
