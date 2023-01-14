package nl.hsleiden.iprwc.service;

import lombok.AllArgsConstructor;
import nl.hsleiden.iprwc.exception.NotFoundException;
import nl.hsleiden.iprwc.model.Product;
import nl.hsleiden.iprwc.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public Product add(Product product) {
        return productRepository.save(product);
    }

    public void addAll(List<Product> products) {
        products.forEach(productRepository::save);
    }

    public Product edit(long productId, Product product) {
        product.setId(productId);
        return productRepository.save(product);
    }

    public void delete(long productId) {
        productRepository.deleteById(productId);
    }

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Product get(long productId) {
        return productRepository.findById(productId).orElseThrow(NotFoundException::new);
    }
}
