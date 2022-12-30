package nl.hsleiden.iprwc.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Cart {
    private List<CartLine> cart;
}