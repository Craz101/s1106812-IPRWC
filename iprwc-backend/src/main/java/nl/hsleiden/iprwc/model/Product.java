package nl.hsleiden.iprwc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
public class Product {
    private String name;
    private String description;
    private String imageUrl;
    private String thumbnailUrl;
    private int price;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
}
