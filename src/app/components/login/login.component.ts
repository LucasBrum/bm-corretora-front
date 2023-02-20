import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logar() {
    this.service.authenticate(this.credenciais).subscribe(response => {
      this.service.successfullLogin(response.headers.get('Authorization').substring(7))
      this.router.navigate(['']) //navega para a página estabelecida no component nav após o login

    }, () => {
      this.toast.error('Usuário e/ou senha inválidos.')
    })

  }

  validaCampos(): boolean {
   return this.email.valid && this.senha.valid;
  }
}