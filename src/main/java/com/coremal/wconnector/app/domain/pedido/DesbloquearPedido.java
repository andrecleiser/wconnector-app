package com.coremal.wconnector.app.domain.pedido;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class DesbloquearPedido {

    private Long bloqueioId;
    private String justificativa;
}
