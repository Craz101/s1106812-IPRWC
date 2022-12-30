package nl.hsleiden.iprwc.util;

import nl.hsleiden.iprwc.model.WebshopUser;
import nl.hsleiden.iprwc.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public CustomUserDetailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        WebshopUser webshopUser = userRepository.findByUsername(username);
        if (webshopUser == null) {
            throw new UsernameNotFoundException(username);
        }
        return webshopUser;
    }
}
