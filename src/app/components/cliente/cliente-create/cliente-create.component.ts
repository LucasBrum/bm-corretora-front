import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    telefone: 0,
    dataNascimento: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  telefone: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  dataNascimento: FormControl = new FormControl(null, Validators.required);



  constructor(
    private clienteService: ClienteService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe(response => {
      this.toastService.success('Cliente cadastrado com sucesso.', 'Cadastro')
      this.router.navigate(['/clientes'])
    }, ex => {
      console.log(ex);

      if (ex.error.errors) {
        ex.error.errors.array.forEach(element => {this.toastService.error(element.message);});
      } else {
        this.toastService.error(ex.error.message);
      }
    })

  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.telefone.valid && this.email.valid && this.dataNascimento.valid
  }

}
