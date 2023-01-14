package nl.hsleiden.iprwc.util;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import nl.hsleiden.iprwc.model.Product;
import nl.hsleiden.iprwc.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class ProductConfig {
    @Bean
    CommandLineRunner productRunner(ProductService productService) {
        return args -> {
            ObjectMapper mapper = new ObjectMapper();
            TypeReference<List<Product>> typeReference = new TypeReference<>(){};
            InputStream inputStream = TypeReference.class.getResourceAsStream("/json/products.json");
            try {
                List<Product> products = mapper.readValue(inputStream, typeReference);
                productService.addAll(products);
            } catch (IOException e){
                System.out.println("Unable to save products: " + e.getMessage());
            }
        };
    }
}
