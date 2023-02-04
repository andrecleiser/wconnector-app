package com.coremal.wconnector.app.service.client;

import com.coremal.wconnector.app.domain.pedido.PedidoBloqueadoResumo;
import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "wconnector-api", url = "${wconnector-api.recurso.pedidos-bloqueados}")
public interface PedidoBloqueadoConnectorClient {
    @GetMapping("all")
    List<PedidoBloqueadoResumo> getAllPedidosBloqueados();
}
