package com.coremal.wconnector.app.config;

import com.coremal.wconnector.app.security.AuthoritiesConstants;
import com.coremal.wconnector.app.security.jwt.JWTConfigurer;
import com.coremal.wconnector.app.security.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter;
import org.springframework.web.filter.CorsFilter;
import org.zalando.problem.spring.web.advice.security.SecurityProblemSupport;
import tech.jhipster.config.JHipsterProperties;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
@Import(SecurityProblemSupport.class)
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JHipsterProperties jHipsterProperties;

    private final TokenProvider tokenProvider;

    private final CorsFilter corsFilter;
    private final SecurityProblemSupport problemSupport;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf()
            .disable()
            .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling()
            .authenticationEntryPoint(problemSupport)
            .accessDeniedHandler(problemSupport)
            .and()
            .headers()
            .contentSecurityPolicy(jHipsterProperties.getSecurity().getContentSecurityPolicy())
            .and()
            .referrerPolicy(ReferrerPolicyHeaderWriter.ReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN)
            .and()
            .permissionsPolicy()
            .policy(
                "camera=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), sync-xhr=()"
            )
            .and()
            .frameOptions()
            .sameOrigin()
            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeRequests()
            .antMatchers(HttpMethod.OPTIONS, "/**")
            .permitAll()
            .antMatchers("/app/**/*.{js,html}")
            .permitAll()
            .antMatchers("/i18n/**")
            .permitAll()
            .antMatchers("/content/**")
            .permitAll()
            .antMatchers("/swagger-ui/**")
            .hasAuthority(AuthoritiesConstants.ADMIN)
            .antMatchers("/test/**")
            .hasAuthority(AuthoritiesConstants.ADMIN)
            .antMatchers("/api/login")
            .permitAll()
            .antMatchers("/api/admin/**")
            .hasAuthority(AuthoritiesConstants.ADMIN)
            .antMatchers("/api/**")
            .authenticated()
            .antMatchers("/management/health/**")
            .hasAuthority(AuthoritiesConstants.ADMIN)
            .antMatchers("/management/info")
            .authenticated()
            .antMatchers("/management/prometheus")
            .permitAll()
            .antMatchers("/management/**")
            .authenticated()
            .and()
            .httpBasic()
            .and()
            .apply(securityConfigurerAdapter());
        return http.build();
    }

    private JWTConfigurer securityConfigurerAdapter() {
        return new JWTConfigurer(tokenProvider);
    }
}
