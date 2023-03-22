import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoBloqueadoResumoComponent } from './pedido-bloqueado-resumo.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [PedidoBloqueadoResumoComponent],
  exports: [PedidoBloqueadoResumoComponent],
  imports: [CommonModule, TagModule, ButtonModule, DialogModule],
})
export class PedidoBloqueadoResumoModule {}
