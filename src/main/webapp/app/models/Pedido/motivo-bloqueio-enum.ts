export enum MotivoBloqueioEnum {
  BLQ_LIM_CREDITO = 'BLQ_LIM_CREDITO',
  BLQ_DUP_ATRASO_2D = 'BLQ_DUP_ATRASO_2D',
  BLQ_VENDA_VISTA = 'BLQ_VENDA_VISTA',
  BLQ_MB_MEDIO_MENOR_8_PERC = 'BLQ_MB_MEDIO_MENOR_8_PERC',
  BLQ_MB_REPOS_MENOR_8_PERC = 'BLQ_MB_REPOS_MENOR_8_PERC',
  BLQ_MB_MEDIO_MENOR_16_PERC = 'BLQ_MB_MEDIO_MENOR_16_PERC',
  BLQ_MB_REPOS_MENOR_16_PERC = 'BLQ_MB_REPOS_MENOR_16_PERC',
  BLQ_MB_MEDIO_MENOR_20_PERC = 'BLQ_MB_MEDIO_MENOR_20_PERC',
  BLQ_MB_REPOS_MENOR_20_PERC = 'BLQ_MB_REPOS_MENOR_20_PERC',
}

export const MotivoBloqueioEnumMapper: Record<string, string> = {
  [MotivoBloqueioEnum.BLQ_LIM_CREDITO]: '2-LIM.CREDITO',
  [MotivoBloqueioEnum.BLQ_DUP_ATRASO_2D]: '3-DUP.ATRASO.2D',
  [MotivoBloqueioEnum.BLQ_VENDA_VISTA]: '6-VENDA.VISTA',
  [MotivoBloqueioEnum.BLQ_MB_MEDIO_MENOR_8_PERC]: '1-MB.MEDIO<8%',
  [MotivoBloqueioEnum.BLQ_MB_REPOS_MENOR_8_PERC]: '1-MB.REPOS<8%',
  [MotivoBloqueioEnum.BLQ_MB_MEDIO_MENOR_16_PERC]: '1-MB.MEDIO<16%',
  [MotivoBloqueioEnum.BLQ_MB_REPOS_MENOR_16_PERC]: '1-MB.REPOS<16%',
  [MotivoBloqueioEnum.BLQ_MB_MEDIO_MENOR_20_PERC]: '1-MB.MEDIO<20%',
  [MotivoBloqueioEnum.BLQ_MB_REPOS_MENOR_20_PERC]: '1-MB.REPOS<20',
};

export const MotivoBloqueioEnumDescricaoMapper: Record<string, MotivoBloqueioEnum> = {
  ['2-LIM.CREDITO']: MotivoBloqueioEnum.BLQ_LIM_CREDITO,
  ['3-DUP.ATRASO.2D']: MotivoBloqueioEnum.BLQ_DUP_ATRASO_2D,
  ['6-VENDA.VISTA']: MotivoBloqueioEnum.BLQ_VENDA_VISTA,
  ['1-MB.MEDIO<8%']: MotivoBloqueioEnum.BLQ_MB_MEDIO_MENOR_8_PERC,
  ['1-MB.REPOS<8%']: MotivoBloqueioEnum.BLQ_MB_REPOS_MENOR_8_PERC,
  ['1-MB.MEDIO<16%']: MotivoBloqueioEnum.BLQ_MB_MEDIO_MENOR_16_PERC,
  ['1-MB.REPOS<16%']: MotivoBloqueioEnum.BLQ_MB_REPOS_MENOR_16_PERC,
  ['1-MB.MEDIO<20%']: MotivoBloqueioEnum.BLQ_MB_MEDIO_MENOR_20_PERC,
  ['1-MB.REPOS<20']: MotivoBloqueioEnum.BLQ_MB_REPOS_MENOR_20_PERC,
};
