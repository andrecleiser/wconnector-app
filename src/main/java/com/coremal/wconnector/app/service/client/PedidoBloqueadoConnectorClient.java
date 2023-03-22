package com.coremal.wconnector.app.service.client;

import com.coremal.wconnector.app.domain.pedido.BloqueioPedidoResumo;
import com.coremal.wconnector.app.domain.pedido.ItemPedidoDetalhe;
import com.coremal.wconnector.app.domain.pedido.PedidoBloqueadoResumo;
import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "wconnector-api", url = "${wconnector-api.recurso.pedidos}")
public interface PedidoBloqueadoConnectorClient {
    @GetMapping("bloqueados")
    List<PedidoBloqueadoResumo> obterBloqueadosPedidos();

    @GetMapping("{pedidoId}/itens")
    List<ItemPedidoDetalhe> obterItensPedido(@PathVariable("pedidoId") String pedidoId);

    @GetMapping("{pedidoId}/bloqueios")
    List<BloqueioPedidoResumo> obterBloqueiosPedido(@PathVariable("pedidoId") String pedidoId);
}
