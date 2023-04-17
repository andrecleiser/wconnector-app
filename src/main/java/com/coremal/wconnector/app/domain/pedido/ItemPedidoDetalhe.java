package com.coremal.wconnector.app.domain.pedido;

import java.io.Serializable;
import java.math.BigDecimal;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ItemPedidoDetalhe implements Serializable {

    private String id;
    private String numeroItem;
    private String codigoProduto;
    private String descricaoProduto;
    private BigDecimal quantidade;
    private BigDecimal volume;
    private BigDecimal valorItem;
    private BigDecimal valorUnitario;
    private BigDecimal valorCustoMedio;
    private BigDecimal percentualMB;
}
