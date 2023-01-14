package nl.hsleiden.iprwc.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class PurchaseOrder {
    @OneToMany(cascade = CascadeType.ALL)
    private List<PurchaseOrderLine> purchasedProducts;
    private int totalPrice;
    public long userId;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
}
