package com.coremal.wconnector.app.domain.pedido;

import java.io.Serializable;
import java.time.LocalDate;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class BloqueioPedidoResumo implements Serializable {

    @EqualsAndHashCode.Include
    private Long id;

    private String motivo;
    private LocalDate dataBloqueio;
}
