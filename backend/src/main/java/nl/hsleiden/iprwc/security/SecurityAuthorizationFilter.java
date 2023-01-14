package nl.hsleiden.iprwc.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.TokenExpiredException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.stream.Collectors;

public class SecurityAuthorizationFilter extends BasicAuthenticationFilter {

    @Value("${token.secret")
    private String secret;

    public SecurityAuthorizationFilter(AuthenticationManager manager) {
        super(manager);
    }

    @SneakyThrows
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String header = request.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        UsernamePasswordAuthenticationToken authentication = getAuthentication(request);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) throws Exception {
        String token = request.getHeader("Authorization");

        if (token != null) {
            try {
                var decodedJWT = JWT.require(Algorithm.HMAC512(secret.getBytes()))
                        .build()
                        .verify(token.replace("Bearer ", ""));

                var id = decodedJWT.getClaim("id").asLong();
                var roles = decodedJWT.getClaim("role");
                String[] strings = new String[]{roles.asString()};

                if (id != null) {
                    var authenticationToken = new UsernamePasswordAuthenticationToken(
                            id,
                            null,
                            Arrays.stream(strings).map(SimpleGrantedAuthority::new).collect(Collectors.toList())
                    );

                    var claims = new SecurityClaims(decodedJWT.getClaims());
                    authenticationToken.setDetails(claims);
                    return authenticationToken;
                }
            } catch (TokenExpiredException ex) {
                throw new Exception("JWT token expired");
            }
        }

        return null;
    }
}
