import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { Authority } from '../config/authority.constants';
import { UserRouteAccessService } from '../core/auth/user-route-access.service';

export const HOME_ROUTE: Route = {
  path: '',
  data: {
    pageTitle: 'home.title',
    moduloErro: 'o Desbloqueio de Pedidos',
    authorities: [Authority.ACESSWCON],
  },
  canActivate: [UserRouteAccessService],
  component: HomeComponent,
};
