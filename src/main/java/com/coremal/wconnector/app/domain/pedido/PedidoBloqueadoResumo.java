package com.coremal.wconnector.app.domain.pedido;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PedidoBloqueadoResumo {

    private Long id;
    private String vendedor;
    private String cliente;
    private String filial;
    private BigDecimal valor;
    private LocalDate dataEmissao;
    private LocalDate dataEntrada;
    private Set<TipoBloqueioEnum> tiposBloqueio;
}
