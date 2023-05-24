package com.coremal.wconnector.app.service.client;

import com.coremal.wconnector.app.domain.pedido.BloqueioPedidoResumo;
import com.coremal.wconnector.app.domain.pedido.DesbloquearPedido;
import com.coremal.wconnector.app.domain.pedido.ItemPedidoDetalhe;
import com.coremal.wconnector.app.domain.pedido.PedidoBloqueadoResumo;
import com.coremal.wconnector.app.service.enums.MotivoBloqueioEnum;
import java.util.List;
import java.util.Set;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "wconnector-api", url = "${wconnector-api.recurso.pedidos}")
public interface PedidoBloqueadoConnectorClient {
    @GetMapping("bloqueados")
    List<PedidoBloqueadoResumo> obterBloqueadosPedidos();

    @GetMapping("{pedidoId}/itens")
    List<ItemPedidoDetalhe> obterItensPedido(@PathVariable("pedidoId") String pedidoId);

    @GetMapping("{pedidoId}/bloqueios")
    List<BloqueioPedidoResumo> obterBloqueiosPedido(@PathVariable("pedidoId") String pedidoId);

    @PatchMapping(value = "{pedidoId}/desbloquear", consumes = MediaType.APPLICATION_JSON_VALUE)
    void desbloquearPedido(@PathVariable("pedidoId") String pedidoId, @RequestBody DesbloquearPedido desbloquearPedido);

    @GetMapping("filiais-pedidos-bloqueados")
    Set<String> obterFiliaisComPedidosBloqueados();

    @GetMapping("motivos-bloqueio")
    Set<MotivoBloqueioEnum> obterMotivosBloqueioPedidosBloqueados();
}
