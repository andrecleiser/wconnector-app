import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPedidoBloqueadoResumo } from '../models/Pedido/pedido-bloqueado-resumo';

@Injectable({
  providedIn: 'root',
})
export class PedidoBloqueadoService {
  constructor(private http: HttpClient) {}

  public getAllPedidosBloqueados(): Observable<IPedidoBloqueadoResumo[]> {
    return this.http.get<IPedidoBloqueadoResumo[]>('api/pedidos-bloqueados/all');
  }
}
