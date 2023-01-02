package nl.hsleiden.iprwc.controller;

import nl.hsleiden.iprwc.model.WebshopUser;
import nl.hsleiden.iprwc.service.WebshopUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/webshopUser")
public class WebshopUserController {
    private final WebshopUserService webshopUserService;

    @Autowired
    public WebshopUserController(WebshopUserService WebshopUserService) {
        this.webshopUserService = WebshopUserService;
    }

    @PostMapping
    public WebshopUser add(@RequestBody WebshopUser webshopUser) {
        return webshopUserService.add(webshopUser);
    }

    @PutMapping("/{webshopUserId}")
    public WebshopUser edit(@RequestParam long webshopUserId, WebshopUser webshopUser) {
        return webshopUserService.edit(webshopUserId, webshopUser);
    }

    @DeleteMapping("/{webshopUserId}")
    public void delete(@RequestParam long webshopUserId) {
        webshopUserService.delete(webshopUserId);
    }

    @GetMapping("/{webshopUserId}")
    public WebshopUser get(@RequestParam long webshopUserId) {
        return webshopUserService.get(webshopUserId);
    }

    @GetMapping
    public List<WebshopUser> getAll() {
        return webshopUserService.getAll();
    }
}
