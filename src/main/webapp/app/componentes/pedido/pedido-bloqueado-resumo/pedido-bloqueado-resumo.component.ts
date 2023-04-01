import { Component, Input, OnInit } from '@angular/core';
import { PedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { PedidoDetalhesComponent } from '../pedido-detalhes/pedido-detalhes.component';
import { DesbloqueioPedido } from '../../../models/Pedido/desbloqueio-pedido';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'jhi-pedido-bloqueado-detalhe',
  templateUrl: './pedido-bloqueado-resumo.component.html',
  styleUrls: ['./pedido-bloqueado-resumo.component.scss'],
  providers: [DialogService, MessageService],
})
export class PedidoBloqueadoResumoComponent implements OnInit {
  @Input()
  public pedidoBloqueadoResumo!: PedidoBloqueadoResumo;

  private ref!: DynamicDialogRef;

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService,
    private pedidoBloqueadoService: PedidoBloqueadoService
  ) {}

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

    this.ref.onClose.subscribe((desbloqueioPedido: DesbloqueioPedido) => {
      if (desbloqueioPedido) {
        this.pedidoBloqueadoService
          .desbloquearPedido(this.pedidoBloqueadoResumo.id!, desbloqueioPedido)
          .pipe(
            catchError(erro =>
              throwError(() =>
                this.messageService.add({
                  key: 'tc',
                  severity: 'error',
                  summary: 'Erro',
                  detail: `Falha ao desbloquear pedido: ${JSON.stringify(erro)}`,
                })
              )
            )
          )
          .subscribe(() =>
            this.messageService.add({ key: 'tc', severity: 'success', summary: 'Desbloqueio', detail: 'Pedido desbloqueado com sucesso!' })
          );
      }
    });
  }
}
