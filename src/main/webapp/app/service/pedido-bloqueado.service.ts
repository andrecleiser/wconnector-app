import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPedidoBloqueadoResumo } from '../models/Pedido/pedido-bloqueado-resumo';
import { IItemPedido } from '../models/Pedido/item-pedido';
import { IBloqueioPedido } from '../models/Pedido/bloqueio-pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoBloqueadoService {
  constructor(private http: HttpClient) {}

  public getAllPedidosBloqueados(): Observable<IPedidoBloqueadoResumo[]> {
    return this.http.get<IPedidoBloqueadoResumo[]>('api/pedidos/bloqueados');
  }

  public getItensPedido(idPedido: string): Observable<IItemPedido[]> {
    return this.http.get<IItemPedido[]>(`api/pedidos/${idPedido}/itens`);
  }

  public getBloqueiosPedido(idPedido: string): Observable<IBloqueioPedido[]> {
    return this.http.get<IBloqueioPedido[]>(`api/pedidos/${idPedido}/bloqueios`);
  }
}
