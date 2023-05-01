import { Observable } from 'rxjs';
import { SeguradoraService } from './../../../services/seguradora.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Seguradora } from 'src/app/models/seguradora';
import { API_CONFIG } from 'src/app/config/api.config';

@Component({
  selector: 'app-seguradora-list',
  templateUrl: './seguradora-list.component.html',
  styleUrls: ['./seguradora-list.component.css']
})
export class SeguradoraListComponent implements OnInit {

  ELEMENT_DATA: Seguradora[] = [];

  displayedColumns: string[] = ['nome', 'acoes'];
  dataSource = new MatTableDataSource<Seguradora>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private seguradoraService: SeguradoraService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll() {
    this.seguradoraService.findAll().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Seguradora>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

}
