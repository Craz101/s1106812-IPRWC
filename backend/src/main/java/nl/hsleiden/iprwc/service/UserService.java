package nl.hsleiden.iprwc.service;

import lombok.AllArgsConstructor;
import nl.hsleiden.iprwc.exception.EmailTakenException;
import nl.hsleiden.iprwc.exception.NotFoundException;
import nl.hsleiden.iprwc.exception.UsernameTakenException;
import nl.hsleiden.iprwc.model.User;
import nl.hsleiden.iprwc.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public User add(User user) {
        if(userRepository.existsUserByUsername(user.getUsername())) {
            throw new UsernameTakenException();
        }
        if (userRepository.existsUserByEmail(user.getEmail())) {
            throw new EmailTakenException();
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public void addAdminUser(User user) {
        if(user.getRole() == null) {
            user.setRole("user");
        }
    }

    public User edit(long userId, User user) {
        user.setId(userId);
        return userRepository.save(user);
    }

    public void delete(long userId) {
        userRepository.deleteById(userId);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User get(long userId) {
        return userRepository.findById(userId).orElseThrow(NotFoundException::new);
    }
    public User get(String userEmail) {
        return userRepository.findByEmail(userEmail);
    }

}