package nl.hsleiden.iprwc.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class PurchaseOrderLine {
    @OneToOne
    private Product product;
    private int count;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
}
