package com.coremal.wconnector.app.dto.jwt;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class JwtRequestDto implements Serializable {

    private String username;
    private String password;
}
