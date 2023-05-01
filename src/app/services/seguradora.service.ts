import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguradora } from '../models/seguradora';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class SeguradoraService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Seguradora[]> {
    return this.http.get<Seguradora[]>(`${API_CONFIG.baseUrl}/seguradoras`)
  }
}
