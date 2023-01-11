import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  post(productData: Product): Observable<Product> {
   return this.http.post<Product>(`/api/product`, productData);
  }

  put(productData: Product): Observable<Product> {
    return this.http.put<Product>(`/api/product/${productData.id}`, productData);
   }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/product`);
  }

  get(productId: number): Observable<String> {
    return this.http.get<String>(`/api/product/${productId}`);
  }

  delete(productId: number): Observable<String> {
    return this.http.delete<String>(`/api/product/${productId}`);
  }
}
