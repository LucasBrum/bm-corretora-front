import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaProduto } from 'src/app/models/categoriaProduto';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  checked = false;
  categoriasProduto: CategoriaProduto[] = [];

  produto: Produto = {
    id: '',
    tipo: '',
    seguradora: '',
    coCorretagem: false,
    dataVigencia: '',
    valorPremioLiquido: null,
    comissaoVendaPorcentagem: null,
    valorComissaoReceber: null,
    agenciamentoPorcentagem: null,
    nomeCliente: ''
  }

  tipo: FormControl = new FormControl(null, Validators.required);
  seguradora: FormControl = new FormControl(null, Validators.required);
  coCorretagem: FormControl = new FormControl(null, Validators.required);
  dataVigencia: FormControl = new FormControl(null, Validators.required);
  valorPremioLiquido: FormControl = new FormControl(null, Validators.required);
  comissaoVendaPorcentagem: FormControl = new FormControl(null, Validators.required);
  valorComissaoReceber: FormControl = new FormControl(null, Validators.required);
  agenciamentoPorcentagem: FormControl = new FormControl(null, Validators.required);
  nomeCliente: FormControl = new FormControl(null, Validators.required);


  constructor(
    private produtoService: ProdutoService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findCategorias();
  }

  findCategorias() {
    this.produtoService.findCategorias().subscribe(response => {
      this.categoriasProduto = response;
      
    });
  }

}
