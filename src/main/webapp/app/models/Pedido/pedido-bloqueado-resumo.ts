import { TipoBloqueioEnum } from './TipoBloqueioEnum';

export interface IPedidoBloqueadoResumo {
  id?: string;
  vendedor?: string;
  cliente?: string;
  filial?: string;
  valor?: number;
  dataEmissao?: Date;
  dataEntrada?: Date;
  tiposBloqueio?: TipoBloqueioEnum[];
  justificativaDesbloqueio?: string;
}
