package com.coremal.wconnector.app.web.rest;

import com.coremal.wconnector.app.domain.pedido.BloqueioPedidoResumo;
import com.coremal.wconnector.app.domain.pedido.DesbloquearPedido;
import com.coremal.wconnector.app.domain.pedido.ItemPedidoDetalhe;
import com.coremal.wconnector.app.domain.pedido.PedidoBloqueadoResumo;
import com.coremal.wconnector.app.security.AuthoritiesConstants;
import com.coremal.wconnector.app.service.client.PedidoBloqueadoConnectorClient;
import com.coremal.wconnector.app.service.enums.MotivoBloqueioEnum;
import java.util.List;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/pedidos")
@Slf4j
@Secured(AuthoritiesConstants.ACESSWCON)
public class PedidoResource {

    private final PedidoBloqueadoConnectorClient pedidoBloqueadoConnectorClient;

    @GetMapping("bloqueados")
    public ResponseEntity<List<PedidoBloqueadoResumo>> getPedidosBloqueados() {
        log.debug("REST request para obter pedidos bloqueados.");
        var pedidosBloqueados = this.pedidoBloqueadoConnectorClient.obterBloqueadosPedidos();
        return ResponseEntity.ok().body(pedidosBloqueados);
    }

    @GetMapping("{pedidoId}/itens")
    public ResponseEntity<List<ItemPedidoDetalhe>> obterItensPedido(@PathVariable String pedidoId) {
        log.debug("[Request] Obter itens do pedido {}.", pedidoId);
        return ResponseEntity.ok().body(this.pedidoBloqueadoConnectorClient.obterItensPedido(pedidoId));
    }

    @GetMapping("{pedidoId}/bloqueios")
    public ResponseEntity<List<BloqueioPedidoResumo>> obterBloqueiosPedido(@PathVariable String pedidoId) {
        log.debug("[Request] Obter bloqueios do pedido {}.", pedidoId);
        return ResponseEntity.ok().body(this.pedidoBloqueadoConnectorClient.obterBloqueiosPedido(pedidoId));
    }

    @PatchMapping("{pedidoId}/desbloquear")
    public void desbloquearPedido(@PathVariable String pedidoId, @RequestBody DesbloquearPedido desbloquearPedido) {
        log.debug("[Request] Retirar bloqueio {} do pedido {}.", desbloquearPedido, pedidoId);
        this.pedidoBloqueadoConnectorClient.desbloquearPedido(pedidoId, desbloquearPedido);
    }

    @GetMapping("filiais-pedidos-bloqueados")
    public ResponseEntity<Set<String>> obterFiliaisComPedidosBloqueados() {
        log.debug("[Request] Obter filiais com pedidos bloqueados.");
        return ResponseEntity.ok().body(this.pedidoBloqueadoConnectorClient.obterFiliaisComPedidosBloqueados());
    }

    @GetMapping("motivos-bloqueio")
    public ResponseEntity<Set<MotivoBloqueioEnum>> obterTiposBloqueio() {
        log.debug("[Request] Obter .");
        return ResponseEntity.ok().body(this.pedidoBloqueadoConnectorClient.obterMotivosBloqueioPedidosBloqueados());
    }
}
