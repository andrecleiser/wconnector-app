import { Component, OnInit } from '@angular/core';
import { IPedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { TipoBloqueioEnum } from '../../../models/Pedido/TipoBloqueioEnum';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'jhi-pedido-bloqueado-lista',
  templateUrl: './pedido-bloqueado-lista.component.html',
  styleUrls: ['./pedido-bloqueado-lista.component.scss'],
})
export class PedidoBloqueadoListaComponent implements OnInit {
  public listaPedidosBloqueados$!: Observable<IPedidoBloqueadoResumo[]>;

  constructor(private pedidoBloqueadoService: PedidoBloqueadoService) {}

  ngOnInit(): void {
    /*    [
      {
        id: 1,
        vendedor: 'André Cleiser',
        cliente: 'Cliente 1',
        filial: 'Filia 1',
        valor: 2547.78,
        dataEmissao: new Date('2023-01-04'),
        dataEntrada: new Date('2023-01-05'),
        tiposBloqueio: [TipoBloqueioEnum.DP]
      },
      {
        id: 2,
        vendedor: 'Heitor Cleiser',
        cliente: 'Cliente 1',
        filial: 'Filia 1',
        valor: 1145.45,
        dataEmissao: new Date('2023-01-06'),
        dataEntrada: new Date('2023-01-07'),
        tiposBloqueio: [TipoBloqueioEnum.DP, TipoBloqueioEnum.MB]
      },
      {
        id: 3,
        vendedor: 'Ayrone Martins',
        cliente: 'Cliente 2',
        filial: 'Filia 2',
        valor: 44457.45,
        dataEmissao: new Date('2023-01-08'),
        dataEntrada: new Date('2023-01-09'),
        tiposBloqueio: [TipoBloqueioEnum.MB]
      }
    ]*/
    this.listaPedidosBloqueados$ = this.pedidoBloqueadoService.getAllPedidosBloqueados();
  }
}
