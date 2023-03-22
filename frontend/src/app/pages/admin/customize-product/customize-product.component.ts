import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-customize-product',
  templateUrl: './customize-product.component.html',
  styleUrls: ['./customize-product.component.scss']
})
export class CustomizeProductComponent {
  products: Product[] = [];
  selectedProduct!: Product;
  modalOpen: boolean = false;
  modalAddNeeded: boolean = false;

  constructor(private productService: ProductService) {}
  
  onAddClick(){
    this.modalAddNeeded = true;
    this.modalOpen = true;
  }

  onEditClick(selectedProduct: Product) {
    this.modalAddNeeded = false;
    this.selectedProduct = selectedProduct;
    this.modalOpen = true;
  }

  onDeleteClick(selectedProduct: Product) {
    if (!window.confirm('Do you wish to save this change?')) {
      return;
    }
    this.productService.delete(selectedProduct.id).subscribe({
      next: () => this.refreshProductList()
    })
  }
  
  refreshProductList() {
    this.productService.getAll().subscribe({
      next: (data: Product[]) => this.products = data
    })
  }

  ngOnInit() {
    this.refreshProductList();
  }
}
