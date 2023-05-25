import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PedidoBloqueadoResumo } from '../models/Pedido/pedido-bloqueado-resumo';
import { ItemPedido } from '../models/Pedido/item-pedido';
import { BloqueioPedido } from '../models/Pedido/bloqueio-pedido';
import { DesbloqueioPedido } from '../models/Pedido/desbloqueio-pedido';
import { map } from 'rxjs/operators';
import { MotivoBloqueioEnum, MotivoBloqueioEnumMapper } from '../models/Pedido/motivo-bloqueio-enum';
import dayjs from 'dayjs/esm';

@Injectable({
  providedIn: 'root',
})
export class PedidoBloqueadoService {
  constructor(private http: HttpClient) {}

  public getAllPedidosBloqueados(motivoBloqueio?: MotivoBloqueioEnum, datasExpedicao?: Date[]): Observable<PedidoBloqueadoResumo[]> {
    if (!motivoBloqueio && !datasExpedicao) {
      return this.http.get<PedidoBloqueadoResumo[]>('api/pedidos/bloqueados');
    }

    let params = new HttpParams();

    if (motivoBloqueio) {
      params = params.append('tipoBloqueio', motivoBloqueio);
    }

    if (datasExpedicao) {
      if ((datasExpedicao.length = 1)) {
        const dateToSend = dayjs(datasExpedicao[0]).format('YYYY-MM-DD').toString();
        console.log(dateToSend);
        params = params.append('dataInicio', dateToSend);
      } else {
        const dateToSend = dayjs(datasExpedicao[0]).format('YYYY-MM-DD').toString();
        const dateToSend2 = dayjs(datasExpedicao[1]).format('YYYY-MM-DD').toString();
        console.log(dateToSend);
        console.log(dateToSend2);
        params = params.append('dataInicio', dateToSend).append('dataFim', dateToSend2);
      }
    }

    return this.http.get<PedidoBloqueadoResumo[]>('api/pedidos/bloqueados', { params });
  }

  public getItensPedido(idPedido: string): Observable<ItemPedido[]> {
    return this.http.get<ItemPedido[]>(`api/pedidos/${idPedido}/itens`);
  }

  public getBloqueiosPedido(idPedido: string): Observable<BloqueioPedido[]> {
    return this.http.get<BloqueioPedido[]>(`api/pedidos/${idPedido}/bloqueios`);
  }

  public desbloquearPedido(idPedido: string, desbloqueioPedido: DesbloqueioPedido): Observable<void> {
    return this.http.patch<void>(`api/pedidos/${idPedido}/desbloquear`, desbloqueioPedido);
  }

  getFiliaisComPedidoBloqueado(): Observable<string[]> {
    return this.http.get<string[]>(`api/pedidos/filiais-pedidos-bloqueados`);
  }

  getMotivosBloqueio(): Observable<string[]> {
    return this.http.get<string[]>(`api/pedidos/motivos-bloqueio`).pipe(
      map(motivos => {
        const motivosMapeados: string[] = [];
        const teste = MotivoBloqueioEnumMapper[MotivoBloqueioEnum.BLQ_MB_MEDIO_MENOR_8_PERC];
        motivos.forEach(motivo => motivosMapeados.push(MotivoBloqueioEnumMapper[motivo]));
        return motivosMapeados.sort();
      })
    );
  }
}
