import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoBloqueadoResumoComponent } from './pedido-bloqueado-resumo.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PedidoDetalheModule } from '../pedido-detalhes/pedido-detalhe.module';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PedidoBloqueadoResumoComponent],
  exports: [PedidoBloqueadoResumoComponent],
  imports: [CommonModule, TagModule, ButtonModule, DynamicDialogModule, PedidoDetalheModule, ToastModule],
})
export class PedidoBloqueadoResumoModule {}
