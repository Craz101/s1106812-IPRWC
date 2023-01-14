package nl.hsleiden.iprwc.model;

import lombok.Data;

@Data
public class CartItem {
    int count;
    Product product;
}