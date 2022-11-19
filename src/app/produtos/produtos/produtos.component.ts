import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [
    {_id: '1', tipo: 'Auto', seguradora: 'Porto', coCorretagem: true, dataVigencia: '20/11/2023', valorPremioLiquido: 100.00, comissaoVendaPorcentagem: 80.0, valorComissaoReceber: 10, agenciamentoPorcentagem: 2 }
  ];
  displayedColumns = ['tipo', 'seguradora', 'coCorretagem', 'dataVigencia', 'valorPremioLiquido', 'comissaoVendaPorcentagem', 'valorComissaoReceber', 'agenciamentoPorcentagem']

  constructor() {
  }

  ngOnInit(): void {
  }

}
