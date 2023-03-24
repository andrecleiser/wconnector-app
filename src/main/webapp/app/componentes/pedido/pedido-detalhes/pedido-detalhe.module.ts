import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoDetalhesComponent } from './pedido-detalhes.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [PedidoDetalhesComponent],
  exports: [PedidoDetalhesComponent],
  imports: [CommonModule, ConfirmDialogModule],
})
export class PedidoDetalheModule {}
