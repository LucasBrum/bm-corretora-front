import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClie: HttpClient ) { }

  findAll(): Observable<Cliente[]> {
    return this.httpClie.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`)
  }
}
