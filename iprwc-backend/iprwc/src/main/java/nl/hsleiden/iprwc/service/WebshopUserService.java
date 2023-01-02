package nl.hsleiden.iprwc.service;

import nl.hsleiden.iprwc.exception.NotFoundException;
import nl.hsleiden.iprwc.model.WebshopUser;
import nl.hsleiden.iprwc.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebshopUserService {

    private UserRepository userRepository;

    @Autowired
    public WebshopUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public WebshopUserService() {
    }

    public WebshopUser add(WebshopUser webshopUser) {
        return userRepository.save(webshopUser);
    }

    public WebshopUser edit(long webshopUserId, WebshopUser webshopUser) {
        webshopUser.setId(webshopUserId);
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