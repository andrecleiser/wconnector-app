import { Component, OnDestroy, OnInit } from '@angular/core';
import { PedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { debounceTime, Observable, Subscription, tap } from 'rxjs';
import { FilterMatchMode, FilterService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'jhi-pedido-bloqueado-lista',
  templateUrl: './pedido-bloqueado-lista.component.html',
  styleUrls: ['./pedido-bloqueado-lista.component.scss'],
})
export class PedidoBloqueadoListaComponent implements OnInit, OnDestroy {
  public listaFiltradaPedidosBloqueados!: PedidoBloqueadoResumo[];
  public editFiltro!: FormControl;
  public formConsulta!: FormGroup;
  private editFiltro$ = new Subscription();
  private listaPedidosBloqueados!: PedidoBloqueadoResumo[];

  constructor(
    private pedidoBloqueadoService: PedidoBloqueadoService,
    private filterService: FilterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formConsulta = this.formBuilder.group({ editFiltro: [''] });

    this.pedidoBloqueadoService.getAllPedidosBloqueados().subscribe(lista => {
      this.listaPedidosBloqueados = lista;
      this.listaFiltradaPedidosBloqueados = lista;
      this.editFiltro$ = this.formConsulta.controls.editFiltro.valueChanges
        .pipe(debounceTime(500))
        .subscribe(
          (filtro: string) =>
            (this.listaFiltradaPedidosBloqueados = this.filterService.filter(
              this.listaPedidosBloqueados,
              ['vendedor', 'cliente', 'filial'],
              filtro,
              FilterMatchMode.STARTS_WITH
            ))
        );
    });
  }

  ngOnDestroy(): void {
    this.editFiltro$.unsubscribe();
  }
}
