import { Component, OnDestroy, OnInit } from '@angular/core';
import { PedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { debounceTime, Subscription } from 'rxjs';
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
  public carregando = false;
  public filiais: string[] = ['00', '03'];
  public motivosBloqueio: string[] = ['010101', '01010102'];

  constructor(
    private pedidoBloqueadoService: PedidoBloqueadoService,
    private filterService: FilterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formConsulta = this.formBuilder.group({
      editFiltro: [''],
      filialSelecionada: [''],
      motivoSelecionado: [''],
    });
    this.obterPedidosBloqueados();
  }

  ngOnDestroy(): void {
    this.editFiltro$.unsubscribe();
  }

  obterPedidosBloqueados(): void {
    this.carregando = true;
    this.pedidoBloqueadoService.getAllPedidosBloqueados().subscribe(lista => {
      this.listaPedidosBloqueados = lista;
      this.listaFiltradaPedidosBloqueados = lista;
      this.editFiltro$ = this.formConsulta.controls.editFiltro.valueChanges
        .pipe(debounceTime(500))
        .subscribe(
          (filtro: string) =>
            (this.listaFiltradaPedidosBloqueados = this.filterService.filter(
              this.listaPedidosBloqueados,
              ['vendedor', 'cliente'],
              filtro,
              FilterMatchMode.STARTS_WITH
            ))
        );
    });
    this.carregando = false;
  }

  filtrarPorFilial(): void {
    console.log(this.filialSelecionada);
    if (!this.filialSelecionada) {
      this.listaFiltradaPedidosBloqueados = this.listaPedidosBloqueados;
      return;
    }

    this.listaFiltradaPedidosBloqueados = this.filterService.filter(
      this.listaPedidosBloqueados,
      ['filial'],
      this.filialSelecionada,
      FilterMatchMode.EQUALS
    );
  }

  filtrarPorMotivo(): void {
    if (!this.motivoSelecionado) {
      return;
    }

    alert('buscar');
  }

  private get filialSelecionada(): string {
    return this.formConsulta.controls['filialSelecionada'].value;
  }

  private get motivoSelecionado(): string {
    return this.formConsulta.controls['motivoSelecionado'].value;
  }
}
