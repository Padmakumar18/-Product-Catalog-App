import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortOption: string): any[] {
    if (!products || !sortOption) {
      return products;
    }

    let sorted = [...products];

    switch (sortOption) {
      case 'lowToHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'nameAZ':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameZA':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return sorted;
  }
}
