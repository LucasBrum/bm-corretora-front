import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';



@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  panelOpenState = false;

  @Input() justify: 'center';

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
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.findAll(); 
  }

  findAll() {
    this.produtoService.findAll().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
