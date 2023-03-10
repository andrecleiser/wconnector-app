package com.coremal.wconnector.app.web.rest;

import com.coremal.wconnector.app.dto.jwt.JwtRequestDto;
import com.coremal.wconnector.app.security.jwt.JWTFilter;
import com.coremal.wconnector.app.security.jwt.TokenProvider;
import com.coremal.wconnector.app.service.client.LoginConnectorClient;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller to authenticate users.
 */
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserJWTController {

    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder auth4enticationManagerBuilder;
    private final LoginConnectorClient loginConnectorClient;

    @PostMapping("/login")
    public ResponseEntity<JWTToken> createAuthenticationToken(@RequestBody JwtRequestDto authenticationRequest) {
        var token = this.loginConnectorClient.createAuthenticationToken(authenticationRequest).getBody();

        var httpHeaders = new HttpHeaders();
        httpHeaders.add(JWTFilter.AUTHORIZATION_HEADER, "Bearer " + token);
        return new ResponseEntity<>(new JWTToken(token.getJwtToken()), httpHeaders, HttpStatus.OK);
        //        return ResponseEntity.ok(token);
    }

    //    @PostMapping("/authenticate")
    //    public ResponseEntity<JWTToken> authorize(@Valid @RequestBody LoginVM loginVM) {
    //        var authenticationToken = new UsernamePasswordAuthenticationToken(
    //            loginVM.getUsername(),
    //            loginVM.getPassword()
    //        );
    //
    //        var authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
    //        SecurityContextHolder.getContext().setAuthentication(authentication);
    //        String jwt = tokenProvider.createToken(authentication, loginVM.isRememberMe());
    //        var httpHeaders = new HttpHeaders();
    //        httpHeaders.add(JWTFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);
    //        return new ResponseEntity<>(new JWTToken(jwt), httpHeaders, HttpStatus.OK);
    //    }

    /**
     * Object to return as body in JWT Authentication.
     */
    static class JWTToken {

        private String idToken;

        JWTToken(String idToken) {
            this.idToken = idToken;
        }

        @JsonProperty("id_token")
        String getIdToken() {
            return idToken;
        }

        void setIdToken(String idToken) {
            this.idToken = idToken;
        }
    }
}
