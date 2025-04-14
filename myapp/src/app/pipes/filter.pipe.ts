import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: any[], selectedCategory: string): any[] {
    if (!products || !selectedCategory) {
      return products;
    }

    return products.filter(product => product.category === selectedCategory);
  }
}
