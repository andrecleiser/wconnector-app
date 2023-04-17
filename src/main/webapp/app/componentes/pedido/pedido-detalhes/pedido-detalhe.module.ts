import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoDetalhesComponent } from './pedido-detalhes.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [PedidoDetalhesComponent],
  exports: [PedidoDetalhesComponent],
  imports: [CommonModule, ConfirmDialogModule, ProgressBarModule],
})
export class PedidoDetalheModule {}
