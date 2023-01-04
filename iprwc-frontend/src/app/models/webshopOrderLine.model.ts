import { Product } from "./product.model";

export interface WebshopOrderLine {
    product: Product;
    quantity: number;
}