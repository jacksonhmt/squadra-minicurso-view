import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { DialogFormContatoComponent } from '../dialog-form-contato/dialog-form-contato.component';
import { ContatoService } from '../contato.service';
import { error } from 'selenium-webdriver';

/**
 * Componente responsável por listar contatos.
 */
@Component({
  selector: 'app-listar-contato',
  templateUrl: './listar-contato.component.html'
})
export class ListarContatoComponent {

  public contatos: MatTableDataSource<any>;
  public columns = ['nome', 'apelido', 'telefone', 'email', 'acao'];

  /**
   * Construtor da classe.
   * 
   * @param dialog 
   * @param route 
   * @param snackBar 
   * @param contatoService 
   */
  constructor(public dialog: MatDialog, route: ActivatedRoute, private snackBar: MatSnackBar, private contatoService: ContatoService) {
    this.contatos = new MatTableDataSource<any>(route.snapshot.data['contatos']);
  }

  /**
   * Abre o modal de inclusão de contato.
   * 
   * @param contato 
   */
  public incluir(contato): void {
    this.dialog.open(DialogFormContatoComponent, {
    }).afterClosed().subscribe(() => {
      this.initContatos();
    });
  }

  /**
   * Abre o modal de alteração de contato.
   * 
   * @param contato 
   */
  public alterar(contato): void {
    this.dialog.open(DialogFormContatoComponent, {
      data: {
        contato: contato
      }
    }).afterClosed().subscribe(() => {
      this.initContatos();
    });
  }

  /**
   * Inicializa o MatTableDataSource com os dados recuperados da api.
   */
  private initContatos(): void {
    this.contatoService.getContatos().subscribe(data => {
      this.contatos = new MatTableDataSource<any>(data);
    }, error => {
      this.snackBar.open(error, '', {
        duration: 6000
      });
    });
  }

}