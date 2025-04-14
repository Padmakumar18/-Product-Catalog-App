// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { SortPipe } from './pipes/sort.pipe';
// import { CategoryFilterPipe } from './pipes/filter.pipe';
// import { ProductService } from './services/product.service';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule, CommonModule, SortPipe, CategoryFilterPipe],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   selectedOption: string = '';
//   selectedCategory: string = '';
//   Products: any[] = [];
//   categories: string[] = [];

//   constructor(private productService: ProductService) {}

//   ngOnInit() {
//     this.Products = this.productService.getProducts();
//     this.categories = [...new Set(this.Products.map(p => p.category))];
//   }

//   clearFilter() {
//     this.selectedCategory = '';
//     this.selectedOption = '';
//   }
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}
