import { Http, Response } from '@angular/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ContatoService } from '../contato.service';
import { error } from 'util';

/**
 * Modal responsável manipulação de contato.
 */
@Component({
  selector: 'app-alterar-contato',
  templateUrl: './dialog-form-contato.component.html'
})
export class DialogFormContatoComponent {

  public contato: any;

  /**
   * Construtor da classe.
   * 
   * @param data 
   * @param dialog 
   * @param snackBar 
   * @param contatoService 
   */
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<DialogFormContatoComponent>, private snackBar: MatSnackBar, private contatoService: ContatoService) {
    this.contato = data == null ? {} : Object.assign({}, data.contato);
  }

  /**
   * Salva o contato informado.
   * 
   * @param contato 
   */
  public salvar(contato): void {
    this.contatoService.salvar(contato).subscribe(data => {
      this.dialog.close();

      this.snackBar.open('Contato salvo com sucesso!', '', {
        duration: 6000
      });
    }, error => {
      this.snackBar.open(error, '', {
        duration: 6000
      });
    });
  }

}
