import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  
  ELEMENT_DATA: Cliente[] = [
    {
      id: 1,
      nome: 'Lucas Finamore Azevedo Brum', 
      cpf: '13605641792',
      email: 'lucas@gmail.com',
      telefone: 21986604532,
      dataNascimento: '20/07/1989'
    }
  ]
  
  displayedColumns: string[] = ['nome', 'cpf', 'email', 'telefone', 'dataNascimento', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
  
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}