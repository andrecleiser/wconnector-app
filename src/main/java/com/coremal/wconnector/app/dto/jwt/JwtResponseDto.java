package com.coremal.wconnector.app.dto.jwt;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponseDto implements Serializable {

    private String jwtToken;
}
