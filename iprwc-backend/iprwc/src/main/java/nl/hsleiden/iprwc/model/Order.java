package nl.hsleiden.iprwc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Order {
    @OneToMany
    private List<OrderLine> purchasedProducts;
    private BigDecimal totalPrice;
    @Id
    public long id;
}
