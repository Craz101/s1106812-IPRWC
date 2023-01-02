package nl.hsleiden.iprwc.service;

import lombok.AllArgsConstructor;
import nl.hsleiden.iprwc.exception.NotFoundException;
import nl.hsleiden.iprwc.model.Cart;
import nl.hsleiden.iprwc.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CartService {
    private final CartRepository cartRepository;

    public Cart add(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart edit(long cartId, Cart cart) {
        cart.setId(cartId);
        return cartRepository.save(cart);
    }

    public void delete(long cartId) {
        cartRepository.deleteById(cartId);
    }

    public List<Cart> getAll() {
        return cartRepository.findAll();
    }

    public Cart get(long cartId) {
        return cartRepository.findById(cartId).orElseThrow(NotFoundException::new);
    }
}
