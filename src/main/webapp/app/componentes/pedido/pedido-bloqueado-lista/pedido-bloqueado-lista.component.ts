import { Component, OnDestroy, OnInit } from '@angular/core';
import { PedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { debounceTime, Observable, Subscription } from 'rxjs';
import { FilterMatchMode, FilterService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BloqueioPedido } from '../../../models/Pedido/bloqueio-pedido';
import { MotivoBloqueioEnumDescricaoMapper } from '../../../models/Pedido/motivo-bloqueio-enum';

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
  public filiais$!: Observable<string[]>;
  public motivosBloqueio$!: Observable<string[]>;
  private intervaloDatas: Date[] = [];

  constructor(
    private pedidoBloqueadoService: PedidoBloqueadoService,
    private filterService: FilterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filiais$ = this.pedidoBloqueadoService.getFiliaisComPedidoBloqueado();
    this.motivosBloqueio$ = this.pedidoBloqueadoService.getMotivosBloqueio();

    this.formConsulta = this.formBuilder.group({
      editFiltro: [''],
      filialSelecionada: [''],
      motivoSelecionado: [''],
      intervaloDatas: [this.intervaloDatas],
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

  obterPedidosComFiltro(): void {
    if (!this.motivoSelecionado && this.intervaloDatas.length == 0) {
      return;
    }

    this.carregando = true;
    this.pedidoBloqueadoService
      .getAllPedidosBloqueados(MotivoBloqueioEnumDescricaoMapper[this.motivoSelecionado], this.intervaloDatas)
      .subscribe(lista => {
        this.listaPedidosBloqueados = lista;
        this.listaFiltradaPedidosBloqueados = lista;
      });
    this.carregando = false;
  }

  private get filialSelecionada(): string {
    return this.formConsulta.controls['filialSelecionada'].value;
  }

  private get motivoSelecionado(): string {
    return this.formConsulta.controls['motivoSelecionado'].value;
  }
}
