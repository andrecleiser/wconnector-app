package com.coremal.wconnector.app.service.enums;

public enum MotivoBloqueioEnum {
    BLQ_LIM_CREDITO("2-LIM.CREDITO"),
    BLQ_DUP_ATRASO_2D("3-DUP.ATRASO.2D"),
    BLQ_VENDA_VISTA("6-VENDA.VISTA"),
    BLQ_MB_MEDIO_MENOR_8_PERC("1-MB.MEDIO<8%"),
    BLQ_MB_REPOS_MENOR_8_PERC("1-MB.REPOS<8%"),
    BLQ_MB_MEDIO_MENOR_16_PERC("1-MB.MEDIO<16%"),
    BLQ_MB_REPOS_MENOR_16_PERC("1-MB.REPOS<16%"),
    BLQ_MB_MEDIO_MENOR_20_PERC("1-MB.MEDIO<20%"),
    BLQ_MB_REPOS_MENOR_20_PERC("1-MB.REPOS<20%");

    private final String valor;

    MotivoBloqueioEnum(String valor) {
        this.valor = valor;
    }

    public String getValor() {
        return valor;
    }

    public static MotivoBloqueioEnum porValor(String valor) {
        for (MotivoBloqueioEnum motivo : MotivoBloqueioEnum.values()) {
            if (motivo.getValor().equalsIgnoreCase(valor)) {
                return motivo;
            }
        }

        throw new IllegalArgumentException("Motivo de bloqueio inválido: " + valor);
    }
}
