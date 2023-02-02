package com.coremal.wconnector.app.web.rest;

import com.coremal.wconnector.app.dto.UsuarioDTO;
import com.coremal.wconnector.app.service.client.UsuarioConnectorClient;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/usuarios")
@Slf4j
public class UsuarioController {

    private final UsuarioConnectorClient usuarioConnectorClient;

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> getAllUsuariosPageable(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of Usuarios");
        Page<UsuarioDTO> page = this.usuarioConnectorClient.getAllUsuarioPageable(pageable);
        var headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    @GetMapping("all")
    public ResponseEntity<List<UsuarioDTO>> getAllUsuarios() {
        log.debug("REST request to get a page of Usuarios");
        var usuariosDto = this.usuarioConnectorClient.getAllUsuario();
        return ResponseEntity.ok().body(usuariosDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> getUsuario(@PathVariable Long id) {
        log.debug("REST request to get Usuario : {}", id);
        Optional<UsuarioDTO> usuarioDTO = Optional.ofNullable(this.usuarioConnectorClient.getUsuario(id));
        return ResponseUtil.wrapOrNotFound(usuarioDTO);
    }
}
