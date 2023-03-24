import { Component, Input, OnInit } from '@angular/core';
import { IPedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { PedidoDetalhesComponent } from '../pedido-detalhes/pedido-detalhes.component';

@Component({
  selector: 'jhi-pedido-bloqueado-detalhe',
  templateUrl: './pedido-bloqueado-resumo.component.html',
  styleUrls: ['./pedido-bloqueado-resumo.component.scss'],
  providers: [DialogService, MessageService],
})
export class PedidoBloqueadoResumoComponent implements OnInit {
  @Input()
  public pedidoBloqueadoResumo!: IPedidoBloqueadoResumo;

  private ref!: DynamicDialogRef;

  constructor(private dialogService: DialogService, private messageService: MessageService) {}

  ngOnInit(): void {}

  mostrarDetalhe(): void {
    this.ref = this.dialogService.open(PedidoDetalhesComponent, {
      header: `Desbloquear pedido Nº ${this.pedidoBloqueadoResumo.id} - Filial: ${this.pedidoBloqueadoResumo.filial}`,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: this.pedidoBloqueadoResumo,
    });

    this.ref.onClose.subscribe((pedidoBloqueadoResumo: IPedidoBloqueadoResumo) => {
      if (pedidoBloqueadoResumo) {
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Desbloqueio', detail: 'Pedido desbloqueado com sucesso!' });
      } else {
        this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Cancelado', detail: 'Pedido de desbloqueio cancelado!' });
      }
    });
  }
}
