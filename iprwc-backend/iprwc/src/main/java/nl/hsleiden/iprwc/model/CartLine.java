package nl.hsleiden.iprwc.model;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class CartLine {
    private Product product;
    private int quantity;
}
