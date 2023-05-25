package com.coremal.wconnector.app.service.client;

import com.coremal.wconnector.app.domain.pedido.BloqueioPedidoResumo;
import com.coremal.wconnector.app.domain.pedido.DesbloquearPedido;
import com.coremal.wconnector.app.domain.pedido.ItemPedidoDetalhe;
import com.coremal.wconnector.app.domain.pedido.PedidoBloqueadoResumo;
import com.coremal.wconnector.app.service.enums.MotivoBloqueioEnum;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "wconnector-api", url = "${wconnector-api.recurso.pedidos}")
public interface PedidoBloqueadoConnectorClient {
    @GetMapping("bloqueados")
    List<PedidoBloqueadoResumo> obterBloqueadosPedidos(
        @RequestParam(value = "filial", required = false) String filial,
        @RequestParam(value = "tipoBloqueio", required = false) MotivoBloqueioEnum tipoBloqueio,
        @RequestParam(value = "dataInicio", required = false) LocalDate dataInicio,
        @RequestParam(value = "dataFim", required = false) LocalDate dataFim
    );

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
