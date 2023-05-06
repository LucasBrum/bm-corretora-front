import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {

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
    'agenciamentoPorcentagem'
  ];
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
  
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
   }

  ngOnInit(): void {
    this.cliente.id = this.activatedRoute.snapshot.paramMap.get('id'); // Pega o id no parâmetro da URL
    this.findProdutosbyIdCliente(this.cliente.id);
    console.log("This Data Source Produtos: ", this.dataSource)
  }

  findProdutosbyIdCliente(id: any) {
    this.produtoService.findProdutosbyIdCliente(this.cliente.id).subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
    })
  }

}
