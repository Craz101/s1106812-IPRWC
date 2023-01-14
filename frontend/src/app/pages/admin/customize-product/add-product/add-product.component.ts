import { Component, EventEmitter, Input, OnChanges,  OnInit,  Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {  
  public addForm!: FormGroup;

  @Output()
  submitted = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: '',
      description: '',
      imageUrl: '',
      thumbnailUrl: '',
      price: 0,
    });
  }

  onSubmit(): void {
    if (!window.confirm('Do you wish to save these changes?')) {
      return;
    }
    const product = {...this.addForm.value }
    this.productService.post(product).subscribe({
      next: () => this.submitted.emit(),
      error: () => console.error('u dun goofed')
    })
  }
}

