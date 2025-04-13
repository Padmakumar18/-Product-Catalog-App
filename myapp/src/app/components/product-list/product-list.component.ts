// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product-list',
//   imports: [],
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class ProductListComponent {

// }

import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = this.productService.getProducts();
  selectedCategory: string = '';
  selectedOption: string = '';
  categories = this.productService.getCategories();

  constructor(private productService: ProductService) {}
}
