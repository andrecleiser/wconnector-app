import { Component, OnInit } from '@angular/core';
import { IPedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'jhi-pedido-bloqueado-lista',
  templateUrl: './pedido-bloqueado-lista.component.html',
  styleUrls: ['./pedido-bloqueado-lista.component.scss'],
})
export class PedidoBloqueadoListaComponent implements OnInit {
  public listaPedidosBloqueados$!: Observable<IPedidoBloqueadoResumo[]>;

  constructor(private pedidoBloqueadoService: PedidoBloqueadoService) {}

  ngOnInit(): void {
    this.listaPedidosBloqueados$ = this.pedidoBloqueadoService.getAllPedidosBloqueados();
  }
}
