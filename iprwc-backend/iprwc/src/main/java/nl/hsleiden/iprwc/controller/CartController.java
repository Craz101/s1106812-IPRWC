package nl.hsleiden.iprwc.controller;

import nl.hsleiden.iprwc.model.Cart;
import nl.hsleiden.iprwc.service.CartService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping
    public Cart add(@RequestBody Cart cart) {
        return cartService.add(cart);
    }

    @PutMapping("/{cartId}")
    public Cart edit(@RequestParam long cartId, Cart cart) {
        return cartService.edit(cartId, cart);
    }

    @DeleteMapping("/{cartId}")
    public void delete(@RequestParam long cartId) {
        cartService.delete(cartId);
    }

    @GetMapping("/{cartId}")
    public Cart get(@RequestParam long cartId) {
        return cartService.get(cartId);
    }

    @GetMapping
    public List<Cart> getAll() {
        return cartService.getAll();
    }
}
