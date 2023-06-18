package com.coremal.wconnector.app.web.rest.config;

import com.coremal.wconnector.app.config.ApplicationProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/aplicacao-config")
@Slf4j
public class AplicacaoConfigResource {

    private final ApplicationProperties applicationProperties;

    @GetMapping("ambiente")
    public String obterAmbiente() {
        return applicationProperties.getAmbiente();
    }
}
