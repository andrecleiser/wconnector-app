import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoBloqueadoListaComponent } from './pedido-bloqueado-lista.component';
import { PedidoBloqueadoResumoModule } from '../pedido-bloqueado-resumo/pedido-bloqueado-resumo.module';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [PedidoBloqueadoListaComponent],
  exports: [PedidoBloqueadoListaComponent],
  imports: [CommonModule, PedidoBloqueadoResumoModule, TagModule],
})
export class PedidoBloqueadoListaModule {}
