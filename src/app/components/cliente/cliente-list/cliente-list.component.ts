import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ProdutoListComponent } from '../../produto/produto-list/produto-list.component';
import { DialogProdutoClienteComponent } from '../../produto/dialog-produto-cliente/dialog-produto-cliente.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  currentDialog = null;
  destroy = new Subject<any>();

  panelOpenState = false;

  ELEMENT_DATA: Cliente[] = [];
  
  displayedColumns: string[] = ['nome', 'cpf', 'email', 'telefone', 'dataNascimento', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.findAll(); 
  }

  // openDialog() {
  //   this.route.params.pipe(takeUntil(this.destroy))
  //   .subscribe(params => {
  //     if(this.currentDialog) {
  //       this.currentDialog.close();
  //     }

  //     this.currentDialog = this.dialog.open(DialogProdutoClienteComponent, {
  //       data: { id: params.id }
  //     });
  //     this.currentDialog.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //       this.router.navigateByUrl('/');
  //     })
  //   })
  // }

  openDialog() {
    const dialogRef = this.dialog.open(DialogProdutoClienteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  findAll() {
    this.clienteService.findAll().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}