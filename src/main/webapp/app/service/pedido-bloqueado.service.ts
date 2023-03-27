import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PedidoBloqueadoResumo } from '../models/Pedido/pedido-bloqueado-resumo';
import { ItemPedido } from '../models/Pedido/item-pedido';
import { BloqueioPedido } from '../models/Pedido/bloqueio-pedido';
import { DesbloqueioPedido } from '../models/Pedido/desbloqueio-pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoBloqueadoService {
  constructor(private http: HttpClient) {}

  public getAllPedidosBloqueados(): Observable<PedidoBloqueadoResumo[]> {
    return this.http.get<PedidoBloqueadoResumo[]>('api/pedidos/bloqueados');
  }

  public getItensPedido(idPedido: string): Observable<ItemPedido[]> {
    return this.http.get<ItemPedido[]>(`api/pedidos/${idPedido}/itens`);
  }

  public getBloqueiosPedido(idPedido: string): Observable<BloqueioPedido[]> {
    return this.http.get<BloqueioPedido[]>(`api/pedidos/${idPedido}/bloqueios`);
  }

  public desbloquearPedido(idPedido: string, desbloqueioPedido: DesbloqueioPedido): Observable<object> {
    const options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };

    return this.http.put(
      `api/pedidos/${idPedido}/bloqueios/${desbloqueioPedido.idBloqueio}/desbloquear`,
      desbloqueioPedido.justificativaDesbloqueio,
      options
    );
  }
}
