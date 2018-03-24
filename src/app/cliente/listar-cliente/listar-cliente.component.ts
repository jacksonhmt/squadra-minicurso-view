import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { IncluirClienteComponent } from '../incluir-cliente/incluir-cliente.component';
import { ClienteService } from '../cliente.service';
import { error } from 'selenium-webdriver';

/**
 * Componente responsável por listar clientes.
 */
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html'
})
export class ListarClienteComponent {

  public clientes: MatTableDataSource<any>;
  public columns = ['nome', 'email', 'cpf', 'acao'];

  /**
   * Construtor da classe.
   * 
   * @param dialog 
   * @param route 
   * @param snackBar 
   * @param clienteService 
   */
  constructor(public dialog: MatDialog, route: ActivatedRoute, private snackBar: MatSnackBar, private clienteService: ClienteService) {
    this.clientes = new MatTableDataSource<any>(route.snapshot.data['clientes']);
  }

  /**
   * Abre o modal de inclusão de cliente.
   * 
   * @param cliente 
   */
  public incluir(cliente): void {
    this.dialog.open(IncluirClienteComponent, {
      width: '400px'
    }).afterClosed().subscribe(() => {
      this.initClientes();
    });
  }

  /**
   * Abre o modal de alteração de cliente.
   * 
   * @param cliente 
   */
  public alterar(cliente): void {
    this.dialog.open(IncluirClienteComponent, {
      width: '400px',
      data: {
        cliente: cliente
      }
    }).afterClosed().subscribe(() => {
      this.initClientes();
    });
  }

  /**
   * Inicializa o MatTableDataSource com os dados recuperados da api.
   */
  private initClientes(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = new MatTableDataSource<any>(data);
    }, error => {
      this.snackBar.open(error, '', {
        duration: 6000
      });
    });
  }
}