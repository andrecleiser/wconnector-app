package com.coremal.wconnector.app.service.client;

import com.coremal.wconnector.app.dto.jwt.JwtRequestDto;
import com.coremal.wconnector.app.dto.jwt.JwtResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "wconnector-api", url = "${wconnector-api.recurso.login}")
public interface LoginConnectorClient {
    @PostMapping
    ResponseEntity<JwtResponseDto> createAuthenticationToken(@RequestBody JwtRequestDto authenticationRequest);
}
