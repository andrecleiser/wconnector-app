import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoBloqueadoListaComponent } from './pedido-bloqueado-lista.component';
import { PedidoBloqueadoResumoModule } from '../pedido-bloqueado-resumo/pedido-bloqueado-resumo.module';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PedidoBloqueadoListaComponent],
  exports: [PedidoBloqueadoListaComponent],
  imports: [CommonModule, PedidoBloqueadoResumoModule, TagModule, InputTextModule, ReactiveFormsModule],
})
export class PedidoBloqueadoListaModule {}
