package nl.hsleiden.iprwc.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    private final SecurityUserDetailsService securityUserDetailsService;

    public SecurityConfig(SecurityUserDetailsService securityUserDetailsService) {
        this.securityUserDetailsService = securityUserDetailsService;
    }

    @Bean
    public AuthenticationManager authManagerBuilder(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder builder = http.getSharedObject(AuthenticationManagerBuilder.class);
        builder.authenticationProvider(authenticationProvider());
        return builder.build();
    }

    public AuthenticationProvider authenticationProvider() {
        var provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(securityUserDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityAuthenticationFilter securityAuthenticationFilter(AuthenticationManager authenticationManager) {
        return new SecurityAuthenticationFilter(authenticationManager);
    }

    @Bean
    public SecurityAuthorizationFilter securityAuthorizationFilter(AuthenticationManager manager) {
        return new SecurityAuthorizationFilter(manager);
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(Arrays.asList(new String[]{"*"}));
        configuration.setAllowedMethods(Arrays.asList(new String[]{"HEAD", "GET", "POST", "PUT", "DELETE", "PATCH"}));
        configuration.setAllowedHeaders(Arrays.asList(new String[]{"Authorization", "Cache-Control", "Content-Type"}));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        var authenticationManager = http.getSharedObject(AuthenticationManager.class);
        http
                .cors().and()
                .csrf().disable()
                .addFilter(securityAuthenticationFilter(authenticationManager))
                .addFilter(securityAuthorizationFilter(authenticationManager))
                .authorizeHttpRequests()
                .requestMatchers("/login", "/user", "/product/**").permitAll()
                .requestMatchers( "/admin/**").hasRole("admin")
                .anyRequest().authenticated();
        return http.build();
    }
}
