import { Http, Response } from '@angular/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ClienteService } from '../cliente.service';
import { error } from 'util';

/**
 * Modal responsável manipulação de cliente.
 */
@Component({
  selector: 'app-incluir-cliente',
  templateUrl: './incluir-cliente.component.html'
})
export class IncluirClienteComponent {

  public cliente: any;

  /**
   * Construtor da classe.
   * 
   * @param data 
   * @param dialog 
   * @param snackBar 
   * @param clienteService 
   */
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<IncluirClienteComponent>, private snackBar: MatSnackBar, private clienteService: ClienteService) {
    this.cliente = data == null ? {} : Object.assign({}, data.cliente);
  }

  /**
   * Salva o cliente informado.
   * 
   * @param cliente 
   */
  public salvar(cliente): void {
    this.clienteService.salvar(cliente).subscribe(data => {
      this.dialog.close();

      this.snackBar.open('Cliente salvo com sucesso!', '', {
        duration: 6000
      });
    }, error => {
      this.snackBar.open(error, '', {
        duration: 6000
      });
    });
  }

}
