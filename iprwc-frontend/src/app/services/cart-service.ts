import { Product } from "../models/product.model";
import { Injectable } from '@angular/core';
import { CartItem } from "../models/cart-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cart } from "../models/cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService{
    cartItems: Cart = {};

    constructor(private http: HttpClient) { }

    addToCart(product: Product) {
        if(product.id in this.cartItems) {
            this.cartItems[product.id].count++;
        }
        else {
            this.cartItems[product.id] = {
                product,
                count: 1
            }
        }
    }
    
    getItems() {
        return this.cartItems;
    }

    post(cartItem: Cart): Observable<Cart> {
        return this.http.post<Cart>(`/api/purchaseorder`, this.cartItems);
       }
    
    clearCart() {
        this.cartItems = {};
        return this.cartItems;
    }
}