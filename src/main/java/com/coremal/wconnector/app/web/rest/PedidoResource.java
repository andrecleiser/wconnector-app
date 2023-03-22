package com.coremal.wconnector.app.web.rest;

import com.coremal.wconnector.app.domain.pedido.BloqueioPedidoResumo;
import com.coremal.wconnector.app.domain.pedido.ItemPedidoDetalhe;
import com.coremal.wconnector.app.domain.pedido.PedidoBloqueadoResumo;
import com.coremal.wconnector.app.security.AuthoritiesConstants;
import com.coremal.wconnector.app.service.client.PedidoBloqueadoConnectorClient;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/pedidos")
@Slf4j
public class PedidoResource {

    private final PedidoBloqueadoConnectorClient pedidoBloqueadoConnectorClient;

    @GetMapping("bloqueados")
    @Secured(AuthoritiesConstants.USER)
    public ResponseEntity<List<PedidoBloqueadoResumo>> getPedidosBloqueados() {
        log.debug("REST request para obter pedidos bloqueados.");
        var pedidosBloqueados = this.pedidoBloqueadoConnectorClient.obterBloqueadosPedidos();
        return ResponseEntity.ok().body(pedidosBloqueados);
    }

    @GetMapping("{pedidoId}/itens")
    @Secured(AuthoritiesConstants.USER)
    public ResponseEntity<List<ItemPedidoDetalhe>> obterItensPedido(@PathVariable String pedidoId) {
        log.debug("[Request] Obter itens do pedido {}.", pedidoId);
        return ResponseEntity.ok().body(this.pedidoBloqueadoConnectorClient.obterItensPedido(pedidoId));
    }

    @GetMapping("{pedidoId}/bloqueios")
    @Secured(AuthoritiesConstants.USER)
    public ResponseEntity<List<BloqueioPedidoResumo>> obterBloqueiosPedido(@PathVariable String pedidoId) {
        log.debug("[Request] Obter bloqueios do pedido {}.", pedidoId);
        return ResponseEntity.ok().body(this.pedidoBloqueadoConnectorClient.obterBloqueiosPedido(pedidoId));
    }
}