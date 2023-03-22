import { Product } from "../models/product.model";
import { Injectable } from '@angular/core';
import { CartItem } from "../models/cart-item.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cart } from "../models/cart.model";
import environment from "src/environments/environment";

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

    get count() {
        return Object.values(this.cartItems).reduce((acc, obj) => acc + obj.count, 0);
    }
    
    get items() {
        return this.cartItems;
    }

    post(cartItem: Cart): Observable<Cart> {
        return this.http.post<Cart>(
          environment.api + `/api/purchaseorder`,
          this.cartItems
        );
       }
    
    clearCart() {
        this.cartItems = {};
        return this.cartItems;
    }
}