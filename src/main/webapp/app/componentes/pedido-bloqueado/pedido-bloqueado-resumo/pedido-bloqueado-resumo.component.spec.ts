import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoBloqueadoResumoComponent } from './pedido-bloqueado-resumo.component';

describe('PedidoBloqueadoDetalheComponent', () => {
  let component: PedidoBloqueadoResumoComponent;
  let fixture: ComponentFixture<PedidoBloqueadoResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidoBloqueadoResumoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoBloqueadoResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
