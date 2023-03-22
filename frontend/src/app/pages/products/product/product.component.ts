import { Component, Input, Renderer2 } from '@angular/core';
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

  constructor(private cartService: CartService, private renderer: Renderer2) {}

  addToCart(event: Event, selectedProduct: Product) {
    this.cartService.addToCart(selectedProduct);
    this.renderer.addClass(event.target, 'adding');
    setTimeout(() => this.renderer.removeClass(event.target, 'adding'), 300);
  }
}
