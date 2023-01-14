import { Product } from "./product.model";

export interface OrderLine {
    product: Product;
    quantity: number;
}