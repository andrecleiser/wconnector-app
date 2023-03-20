package com.coremal.wconnector.app.domain.pedido;

import java.util.Arrays;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public enum TipoBloqueioEnum {
    DP("DP"),
    MB("MB"),
    CR("CR"),
    VAV("VAV");

    private final String tipo;

    TipoBloqueioEnum(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }

    public static Set<TipoBloqueioEnum> obterTiposBloqueio(String motivos) {
        return Arrays.stream(motivos.split("/")).filter(Objects::nonNull).map(TipoBloqueioEnum::obterTipo).collect(Collectors.toSet());
    }

    public static TipoBloqueioEnum obterTipo(String descricaoMotivo) {
        for (TipoBloqueioEnum e : values()) {
            if (e.getTipo().equals(descricaoMotivo)) {
                return e;
            }
        }
        return null;
    }
}
