import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { Observable } from 'rxjs';
import { ItemPedido } from '../../../models/Pedido/item-pedido';
import { BloqueioPedido } from '../../../models/Pedido/bloqueio-pedido';
import { ConfirmationService } from 'primeng/api';
import { DesbloqueioPedido } from '../../../models/Pedido/desbloqueio-pedido';

@Component({
  templateUrl: './pedido-detalhes.component.html',
  styleUrls: ['./pedido-detalhes.component.scss'],
  providers: [ConfirmationService],
})
export class PedidoDetalhesComponent implements OnInit {
  public dadosPedido!: PedidoBloqueadoResumo;
  public itensPedido$!: Observable<ItemPedido[]>;
  public bloqueiosPedido$!: Observable<BloqueioPedido[]>;

  @ViewChild('justificativa') justificativa!: ElementRef;

  constructor(
    private dialog: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private pedidoBloqueadoService: PedidoBloqueadoService,
    private confirmationService: ConfirmationService
  ) {
    this.dadosPedido = dialog.data as PedidoBloqueadoResumo;
  }

  ngOnInit(): void {
    this.itensPedido$ = this.pedidoBloqueadoService.getItensPedido(this.dadosPedido?.id!);
    this.bloqueiosPedido$ = this.pedidoBloqueadoService.getBloqueiosPedido(this.dadosPedido?.id!);
  }

  confirmarDesbloqueio(bloqueio: BloqueioPedido) {
    this.confirmationService.confirm({
      message: `Tem certeza de que quer retirar o bloqueio ${bloqueio.motivo} do pedido?`,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: ' { width: 134px; margin-top: 5px } ',
      rejectButtonStyleClass: ' { width: 134px; margin-top: 5px } ',
      accept: () => {
        console.log(this.justificativa);
        const desbloqueio: DesbloqueioPedido = {
          idBloqueio: bloqueio.id,
          justificativaDesbloqueio: this.justificativa.nativeElement.value,
        };
        this.ref.close(desbloqueio);
      },
      reject: () => {
        this.ref.close(undefined);
      },
    });
  }
}
