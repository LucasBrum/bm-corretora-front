import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Seguradora } from 'src/app/models/seguradora';

@Component({
  selector: 'app-seguradora-list',
  templateUrl: './seguradora-list.component.html',
  styleUrls: ['./seguradora-list.component.css']
})
export class SeguradoraListComponent implements OnInit {

  ELEMENT_DATA: Seguradora[] = [
    {nome: 'Porto Seguro'}
  ];

  displayedColumns: string[] = ['nome', 'acoes'];
  dataSource = new MatTableDataSource<Seguradora>(this.ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
