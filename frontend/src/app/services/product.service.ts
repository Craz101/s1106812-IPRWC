import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  post(productData: Product): Observable<Product> {
   return this.http.post<Product>(environment.api + `/api/product`, productData);
  }

  put(productData: Product): Observable<Product> {
    return this.http.put<Product>(environment.api + `/api/product/${productData.id}`,
      productData
    );
   }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.api + `/api/product`);
  }

  get(productId: number): Observable<String> {
    return this.http.get<String>(environment.api + `/api/product/${productId}`);
  }

  delete(productId: number): Observable<String> {
    return this.http.delete<String>(environment.api + `/api/product/${productId}`);
  }
}
