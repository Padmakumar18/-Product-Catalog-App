import { RouterModule } from '@angular/router';
import { ProductService } from '@app/services/product.service';
import { CategoryFilterPipe } from '@app/pipes/filter.pipe';
import { SortPipe } from '@app/pipes/sort.pipe';
import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CategoryFilterPipe, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedOption = '';
  selectedCategory = '';
  Products: any[] = [];
  categories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.Products = this.productService.getProducts();
    this.categories = [...new Set(this.Products.map(p => p.category))];
  }

  clearFilter() {
    this.selectedOption = '';
    this.selectedCategory = '';
  }
}
