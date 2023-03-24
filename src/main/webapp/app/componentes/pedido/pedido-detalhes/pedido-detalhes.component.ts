import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IPedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { Observable } from 'rxjs';
import { IItemPedido } from '../../../models/Pedido/item-pedido';
import { IBloqueioPedido } from '../../../models/Pedido/bloqueio-pedido';
import { ConfirmationService } from 'primeng/api';

@Component({
  templateUrl: './pedido-detalhes.component.html',
  styleUrls: ['./pedido-detalhes.component.scss'],
  providers: [ConfirmationService],
})
export class PedidoDetalhesComponent implements OnInit {
  public dadosPedido!: IPedidoBloqueadoResumo;
  public itensPedido$!: Observable<IItemPedido[]>;
  public bloqueiosPedido$!: Observable<IBloqueioPedido[]>;

  constructor(
    private dialog: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private pedidoBloqueadoService: PedidoBloqueadoService,
    private confirmationService: ConfirmationService
  ) {
    this.dadosPedido = dialog.data as IPedidoBloqueadoResumo;
  }

  ngOnInit(): void {
    this.itensPedido$ = this.pedidoBloqueadoService.getItensPedido(this.dadosPedido?.id!);
    this.bloqueiosPedido$ = this.pedidoBloqueadoService.getBloqueiosPedido(this.dadosPedido?.id!);
  }

  confirmarDesbloqueio() {
    this.confirmationService.confirm({
      message: 'Tem certeza de que quer desbloquear o pedido?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.ref.close(this.dadosPedido);
      },
      reject: () => {
        this.ref.close(undefined);
      },
    });
  }
}
