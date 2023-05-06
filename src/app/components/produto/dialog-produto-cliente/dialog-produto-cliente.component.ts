import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-dialog-produto-cliente',
  templateUrl: './dialog-produto-cliente.component.html',
  styleUrls: ['./dialog-produto-cliente.component.css']
})
export class DialogProdutoClienteComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    telefone: 0,
    dataNascimento: ''
  }
  
  ELEMENT_DATA: Produto[] = [];
  
  displayedColumns: string[] = [
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
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
  
  constructor(
    
    private dialog: MatDialogRef<DialogProdutoClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log('Injected data', data);
   }

  ngOnInit(): void {
    this.cliente.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.findProdutosbyIdCliente(this.cliente.id);
  }

  

  findProdutosbyIdCliente(id: any) {
    console.log(this.cliente.id);
    this.produtoService.findProdutosbyIdCliente(this.cliente.id).subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
    })
  }

}
