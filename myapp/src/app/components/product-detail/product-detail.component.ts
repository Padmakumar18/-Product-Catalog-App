// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product-detail',
//   imports: [],
//   templateUrl: './product-detail.component.html',
//   styleUrl: './product-detail.component.css'
// })
// export class ProductDetailComponent {

// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product: any;
}
