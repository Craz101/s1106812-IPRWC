package nl.hsleiden.iprwc.controller;

import nl.hsleiden.iprwc.model.Product;
import nl.hsleiden.iprwc.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
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
    public Product edit(@RequestParam long productId, Product product) {
        return productService.edit(productId, product);
    }

    @DeleteMapping("/{productId}")
    public void delete(@RequestParam long productId) {
        productService.delete(productId);
    }

    @GetMapping("/{productId}")
    public Product get(@RequestParam long productId) {
        return productService.get(productId);
    }

    @GetMapping
    public List<Product> getAll() {
        return productService.getAll();
    }
}
