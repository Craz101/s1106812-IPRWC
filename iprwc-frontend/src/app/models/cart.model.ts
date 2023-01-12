import { CartItem } from "./cart-item.model";

export interface Cart {
    [key: number]: CartItem;
}