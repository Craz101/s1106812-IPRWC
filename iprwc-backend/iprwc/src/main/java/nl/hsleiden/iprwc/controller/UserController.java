package nl.hsleiden.iprwc.controller;

import nl.hsleiden.iprwc.model.User;
import nl.hsleiden.iprwc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService UserService) {
        this.userService = UserService;
    }

    @PostMapping
    public User add(@RequestBody User user) {
        return userService.add(user);
    }

    @PutMapping("/{userId}")
    public User edit(@RequestParam long webshopUserId, User user) {
        return userService.edit(webshopUserId, user);
    }

    @DeleteMapping("/{userId}")
    public void delete(@RequestParam long userId) {
        userService.delete(userId);
    }

    @GetMapping("/{userId}")
    public User get(@RequestParam long userId) {
        return userService.get(userId);
    }

    @GetMapping
    public List<User> getAll() {
        return userService.getAll();
    }
}
