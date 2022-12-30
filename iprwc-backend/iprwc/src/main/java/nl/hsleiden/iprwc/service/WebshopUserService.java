package nl.hsleiden.iprwc.service;

import lombok.AllArgsConstructor;
import nl.hsleiden.iprwc.exception.NotFoundException;
import nl.hsleiden.iprwc.model.WebshopUser;
import nl.hsleiden.iprwc.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class WebshopUserService {

    private final UserRepository userRepository;

    public WebshopUser add(WebshopUser webshopUser) {
        return userRepository.save(webshopUser);
    }

    public WebshopUser edit(long userId, WebshopUser webshopUser) {
        webshopUser.setId(userId);
        return userRepository.save(webshopUser);
    }

    public void delete(long userId) {
        userRepository.deleteById(userId);
    }

    public List<WebshopUser> getAll() {
        return userRepository.findAll();
    }

    public WebshopUser get(long userId) {
        return userRepository.findById(userId).orElseThrow(NotFoundException::new);
    }
}