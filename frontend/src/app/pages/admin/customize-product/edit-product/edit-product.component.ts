import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnChanges {

  @Input()
  product!: Product;
  editForm!: FormGroup;
  @Output()
  submitted = new EventEmitter();


  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnChanges(): void {
    this.editForm = this.formBuilder.group({
      name: this.product.name,
      description: this.product.description,
      imageUrl: this.product.imageUrl,
      thumbnailUrl: this.product.thumbnailUrl,
      price: this.product.price,
    });
  }

  onSubmit(): void {
    if (!window.confirm('Do you wish to save this change?')) {
      return;
    }
    const product = { id: this.product.id, ...this.editForm.value }
    this.productService.put(product).subscribe({
      next: (data: Product) => {
        this.product = data;
        this.submitted.emit();
      }
    })
  }

}
