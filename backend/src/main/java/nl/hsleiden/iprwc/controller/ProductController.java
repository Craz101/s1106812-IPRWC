package nl.hsleiden.iprwc.controller;

import nl.hsleiden.iprwc.model.Product;
import nl.hsleiden.iprwc.service.ProductService;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public Product add(@RequestBody Product product) {
        return productService.add(product);
    }

    @PutMapping("/{productId}")
    public Product edit(@PathVariable long productId, @RequestBody Product product) {
        return productService.edit(productId, product);
    }

    @DeleteMapping("/{productId}")
    public void delete(@PathVariable long productId) {
        productService.delete(productId);
    }

    @GetMapping("/{productId}")
    public Product get(@PathVariable long productId) {
        return productService.get(productId);
    }

    @GetMapping
    public List<Product> getAll() {
        return productService.getAll();
    }
}
