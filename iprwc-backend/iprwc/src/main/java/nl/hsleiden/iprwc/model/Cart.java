package nl.hsleiden.iprwc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Cart {
    @OneToMany
    private List<CartLine> cartEntries;
    private BigDecimal totalPrice;
    @Id
    public long id;
}