package com.coremal.wconnector.app.web.rest;

import com.coremal.wconnector.app.domain.pedido.PedidoBloqueadoResumo;
import com.coremal.wconnector.app.security.AuthoritiesConstants;
import com.coremal.wconnector.app.service.client.PedidoBloqueadoConnectorClient;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/pedidos-bloqueados")
@Slf4j
public class PedidoBloqueadoController {

    private final PedidoBloqueadoConnectorClient pedidoBloqueadoConnectorClient;

    @GetMapping("all")
    @Secured(AuthoritiesConstants.USER)
    public ResponseEntity<List<PedidoBloqueadoResumo>> getAllUsuarios() {
        log.debug("REST request para obter pedidos bloqueados.");
        var pedidosBloqueados = this.pedidoBloqueadoConnectorClient.getAllPedidosBloqueados();
        return ResponseEntity.ok().body(pedidosBloqueados);
    }
    //
    //    @GetMapping("/{id}")
    //    public ResponseEntity<UsuarioDTO> getUsuario(@PathVariable Long id) {
    //        log.debug("REST request to get Usuario : {}", id);
    //        Optional<UsuarioDTO> usuarioDTO = Optional.ofNullable(this.usuarioConnectorClient.getUsuario(id));
    //        return ResponseUtil.wrapOrNotFound(usuarioDTO);
    //    }
}
