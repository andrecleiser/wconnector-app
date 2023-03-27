import { TipoBloqueioEnum } from './tipo-bloqueio-enum';

export interface PedidoBloqueadoResumo {
  id?: string;
  vendedor?: string;
  cliente?: string;
  filial?: string;
  valor?: number;
  dataEmissao?: Date;
  dataEntrada?: Date;
  tiposBloqueio?: TipoBloqueioEnum[];
}
