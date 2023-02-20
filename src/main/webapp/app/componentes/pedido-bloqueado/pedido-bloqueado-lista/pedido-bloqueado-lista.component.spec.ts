import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoBloqueadoListaComponent } from './pedido-bloqueado-lista.component';

describe('PedidoBloqueadoListaComponent', () => {
  let component: PedidoBloqueadoListaComponent;
  let fixture: ComponentFixture<PedidoBloqueadoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidoBloqueadoListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoBloqueadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
