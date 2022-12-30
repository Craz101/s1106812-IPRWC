package nl.hsleiden.iprwc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@Entity
@NoArgsConstructor
public class OrderLine {
    @OneToOne
    private Product orderedProduct;
    private BigDecimal price;
    private int quantity;
    private int discount;
    @Id
    public long id;
}
