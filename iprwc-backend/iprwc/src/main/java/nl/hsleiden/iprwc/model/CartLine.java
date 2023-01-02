package nl.hsleiden.iprwc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class CartLine {
    @OneToOne
    private Product product;
    private int quantity;
    @Id
    public long id;
}
