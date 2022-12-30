package nl.hsleiden.iprwc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Currency;

@Data
@Entity
@NoArgsConstructor
public class Product {
    private String name;
    private String description;
    private String imageUrl;
    private BigDecimal price;
    private int discount;

    @Id
    public long id;
}
