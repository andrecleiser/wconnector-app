import { TipoBloqueioEnum } from './TipoBloqueioEnum';

export interface IPedidoBloqueadoResumo {
  id?: number;
  vendedor?: string;
  cliente?: string;
  filial?: string;
  valor?: number;
  dataEmissao?: Date;
  dataEntrada?: Date;
  tiposBloqueio?: TipoBloqueioEnum[];
}
