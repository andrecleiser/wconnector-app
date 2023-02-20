import { Component, Input, OnInit } from '@angular/core';
import { IPedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';

@Component({
  selector: 'jhi-pedido-bloqueado-detalhe',
  templateUrl: './pedido-bloqueado-resumo.component.html',
  styleUrls: ['./pedido-bloqueado-resumo.component.scss'],
})
export class PedidoBloqueadoResumoComponent implements OnInit {
  @Input()
  public pedidoBloqueadoResumo!: IPedidoBloqueadoResumo;

  constructor() {}

  ngOnInit(): void {}
}
