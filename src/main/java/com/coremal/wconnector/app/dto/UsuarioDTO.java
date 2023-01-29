package com.coremal.wconnector.app.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class UsuarioDTO implements Serializable {

    @EqualsAndHashCode.Include
    private Long id;

    @NotNull
    @Size(max = 20)
    private String login;

    @NotNull
    @Size(max = 50)
    private String nome;
}
