import { FormControl, Validators } from '@angular/forms';
import { Seguradora } from './../../../models/seguradora';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguradora-create',
  templateUrl: './seguradora-create.component.html',
  styleUrls: ['./seguradora-create.component.css']
})
export class SeguradoraCreateComponent implements OnInit {

  seguradora: Seguradora = {
    id: '',
    nome: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));

  constructor() { }

  ngOnInit(): void {
  }

  create(): void {

  }

  validaCampos(): boolean {
    return this.nome.valid
  }


}
