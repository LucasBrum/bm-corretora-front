import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {
  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    telefone: 0,
    dataNascimento: ''
  }

  constructor(
    private clienteService: ClienteService,
    private toastService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cliente.id = this.activatedRoute.snapshot.paramMap.get('id'); // Pega o id no parâmetro da URL
    this.findById();
  }

  findById(): void {
    this.clienteService.findById(this.cliente.id).subscribe(response => {
      this.cliente = response;
    })
  }

  delete(): void {
    this.clienteService.delete(this.cliente.id).subscribe(response => {
      this.toastService.success('Cliente removido com sucesso.', 'Delete')
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

}
