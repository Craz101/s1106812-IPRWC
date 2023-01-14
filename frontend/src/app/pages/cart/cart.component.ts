import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnChanges{
  order!: Order;
  cartItems = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  ngOnChanges(): void {
    
  }
  
  clearCart() {
    this.cartService.clearCart();
  }

  onOrderItems() {
    if (!window.confirm('Do you wish to order these items?')) {
      return;
    }
    this.cartService.post(this.cartItems).subscribe({
      next: () => this.cartService.clearCart(),
      error: () => console.error('u dun goofed')
    })
  }
}

