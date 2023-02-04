import { TestBed } from '@angular/core/testing';

import { PedidoBloqueadoService } from './pedido-bloqueado.service';

describe('PedidoBloqueadoService', () => {
  let service: PedidoBloqueadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoBloqueadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
