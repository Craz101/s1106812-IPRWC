package nl.hsleiden.iprwc.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import nl.hsleiden.iprwc.model.LoginDetails;
import nl.hsleiden.iprwc.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import java.io.IOException;

public class SecurityAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Value("${token.secret}")
    private String secret;

    public SecurityAuthenticationFilter(AuthenticationManager manager) {
        setAuthenticationManager(manager);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            var loginDetails = new ObjectMapper().readValue(request.getInputStream(), LoginDetails.class);
            var token = new UsernamePasswordAuthenticationToken(loginDetails.getEmail(), loginDetails.getPassword());
            return getAuthenticationManager().authenticate(token);
        } catch (IOException ex) {
            System.out.println("Could not parse login fields: " + ex.getMessage());
        }
        return null;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        SecurityUser user = (SecurityUser) authResult.getPrincipal();

        String token = JWT.create()
                .withSubject(user.getUsername())
                .withClaim("email", user.getEmail())
                .withClaim("role", user.getRole())
                .withClaim("id", user.getId())
//                .withExpiresAt(new Date(System.currentTimeMillis() + 3600000)) 1 hour expiration
                .sign(Algorithm.HMAC512(secret));
        // response.addHeader("Authorization", "Bearer " + token);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().write("{\"authorization\": \"" + token + "\"}");
    }
}
