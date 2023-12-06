import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaProduto } from 'src/app/models/categoriaProduto';
import { Cliente } from 'src/app/models/cliente';
import { Produto } from 'src/app/models/produto';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  checked = false;
  categoriasProduto: CategoriaProduto[] = [];
  clientes: Cliente[]=[];

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
    private clienteService: ClienteService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findCategorias();
    this.findClientes();
  }

  findCategorias() {
    this.produtoService.findCategorias().subscribe(response => {
      
      this.categoriasProduto = response;
      
    });
  }

  findClientes() {
    this.clienteService.findAll().subscribe(response => {
      this.clientes = response;
    })
  }

}
