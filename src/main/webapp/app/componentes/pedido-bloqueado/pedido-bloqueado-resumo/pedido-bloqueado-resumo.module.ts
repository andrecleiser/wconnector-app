import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoBloqueadoResumoComponent } from './pedido-bloqueado-resumo.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PedidoBloqueadoResumoComponent],
  exports: [PedidoBloqueadoResumoComponent],
  imports: [CommonModule, TagModule, ButtonModule],
})
export class PedidoBloqueadoResumoModule {}
