import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart-service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {
  @Input()
  product!: Product;

  constructor(private cartService: CartService) {}

  addToCart(selectedProduct: Product) {
    this.cartService.addToCart(selectedProduct);
    window.alert('Your item has been added to the cart');
  }
}
