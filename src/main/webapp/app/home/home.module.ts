import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { PedidoBloqueadoResumoModule } from '../componentes/pedido-bloqueado/pedido-bloqueado-resumo/pedido-bloqueado-resumo.module';
import { PedidoBloqueadoListaModule } from '../componentes/pedido-bloqueado/pedido-bloqueado-lista/pedido-bloqueado-lista.module';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HOME_ROUTE]), PedidoBloqueadoResumoModule, PedidoBloqueadoListaModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
