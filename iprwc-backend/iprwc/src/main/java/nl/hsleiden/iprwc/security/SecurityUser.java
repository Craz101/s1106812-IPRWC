package nl.hsleiden.iprwc.security;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
public class SecurityUser extends org.springframework.security.core.userdetails.User {
    private long id;
    private String email;
    private String role;

    public SecurityUser(long id, String username, String password, String email, String role, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

