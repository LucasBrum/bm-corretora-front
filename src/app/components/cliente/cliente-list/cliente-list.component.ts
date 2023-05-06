import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  
  currentDialog = null;
  destroy = new Subject<any>();

  panelOpenState = false;

  ELEMENT_DATA_CLIENTE: Cliente[] = [];
  ELEMENT_DATA_PRODUTO_CLIENTE: Produto[] = [];

  displayedOProdutoColumns: string[] = [
    'tipo', 
    'seguradora',
    'coCorretagem',
    'dataVigencia',
    'valorPremioLiquido',
    'comissaoVendaPorcentagem',
    'valorComissaoReceber',
    'agenciamentoPorcentagem',
    'nomeCliente',
    'acoes'];
  dataSourceProduto = new MatTableDataSource<Produto>(this.ELEMENT_DATA_PRODUTO_CLIENTE);
  
  displayedColumns: string[] = ['nome', 'cpf', 'email', 'telefone', 'dataNascimento', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA_CLIENTE);

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.findAll(); 
  }


  findAll() {
    this.clienteService.findAll().subscribe(response => {
      this.ELEMENT_DATA_CLIENTE = response;
      this.dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA_CLIENTE);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}