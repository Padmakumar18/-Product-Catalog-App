import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 50000 },
    { id: 2, name: 'Mobile', category: 'Electronics', price: 15000 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 1000 },
    { id: 4, name: 'Shoes', category: 'Footwear', price: 2000 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 3000 }
  ];

  getProducts(): Observable<any[]> {
    return of(this.products);
  }
}