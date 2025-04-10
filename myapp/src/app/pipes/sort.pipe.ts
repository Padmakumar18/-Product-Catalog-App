import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortBy: string): any[] {
    if (!products || !sortBy) {
      return products;
    }
    return products.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
  }

}
