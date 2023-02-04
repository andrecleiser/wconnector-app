import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoBloqueadoResumoComponent } from './pedido-bloqueado-resumo.component';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [PedidoBloqueadoResumoComponent],
  exports: [PedidoBloqueadoResumoComponent],
  imports: [CommonModule, TagModule],
})
export class PedidoBloqueadoResumoModule {}
