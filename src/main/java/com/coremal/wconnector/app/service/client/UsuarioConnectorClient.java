package com.coremal.wconnector.app.service.client;

import com.coremal.wconnector.app.dto.UsuarioDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "wconnector-api", url = "${wconnector-api.recurso.usuario}")
public interface UsuarioConnectorClient {

    @GetMapping
    Page<UsuarioDTO> getAllUsuarioPageable(@org.springdoc.api.annotations.ParameterObject Pageable pageable);

    @GetMapping("all")
    List<UsuarioDTO> getAllUsuario();

    @GetMapping(value = "{id}")
    UsuarioDTO getUsuario(@PathVariable("id") Long id);
}
