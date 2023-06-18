import { Component, OnDestroy, OnInit } from '@angular/core';
import { PedidoBloqueadoResumo } from '../../../models/Pedido/pedido-bloqueado-resumo';
import { PedidoBloqueadoService } from '../../../service/pedido-bloqueado.service';
import { debounceTime, Observable, Subscription } from 'rxjs';
import { FilterMatchMode, FilterService, PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MotivoBloqueioEnumDescricaoMapper } from '../../../models/Pedido/motivo-bloqueio-enum';

@Component({
  selector: 'jhi-pedido-bloqueado-lista',
  templateUrl: './pedido-bloqueado-lista.component.html',
  styleUrls: ['./pedido-bloqueado-lista.component.scss'],
})
export class PedidoBloqueadoListaComponent implements OnInit, OnDestroy {
  listaFiltradaPedidosBloqueados!: PedidoBloqueadoResumo[];
  formConsulta!: FormGroup;
  carregando = false;
  filiais$!: Observable<string[]>;
  motivosBloqueio$!: Observable<string[]>;

  private editFiltro$ = new Subscription();
  private listaPedidosBloqueados!: PedidoBloqueadoResumo[];

  constructor(
    private pedidoBloqueadoService: PedidoBloqueadoService,
    private filterService: FilterService,
    private formBuilder: FormBuilder,
    private config: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.filiais$ = this.pedidoBloqueadoService.getFiliaisComPedidoBloqueado();
    this.motivosBloqueio$ = this.pedidoBloqueadoService.getMotivosBloqueio();

    this.config.setTranslation({
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
    });

    this.formConsulta = this.formBuilder.group({
      editFiltro: [''],
      filialSelecionada: [''],
      motivoSelecionado: [''],
      intervaloDatas: [[]],
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

  private get intervaloDatas(): Date[] {
    return this.formConsulta.controls['intervaloDatas'].value;
  }
}
