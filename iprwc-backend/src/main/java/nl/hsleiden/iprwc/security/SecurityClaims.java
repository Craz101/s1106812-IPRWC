package nl.hsleiden.iprwc.security;


import com.auth0.jwt.interfaces.Claim;

import java.util.Map;

public class SecurityClaims {
    long userId;
    String role;

    public SecurityClaims(Map<String, Claim> claims) {
        this.userId = claims.get("id").asLong();
        this.role = claims.get("role").asString();
    }
}
