import { SeguradoraUpdateComponent } from './components/seguradora/seguradora-update/seguradora-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { SeguradoraListComponent } from './components/seguradora/seguradora-list/seguradora-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AuthGuard } from './auth/auth.guard';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { SeguradoraCreateComponent } from './components/seguradora/seguradora-create/seguradora-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'seguradoras', component: SeguradoraListComponent },
      { path: 'seguradoras/create', component: SeguradoraCreateComponent },
      { path: 'seguradoras/update', component: SeguradoraUpdateComponent},
      
      { path: 'clientes', component: ClienteListComponent },
      { path: 'clientes/create', component: ClienteCreateComponent},
      { path: 'clientes/update/:id', component: ClienteUpdateComponent},
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
