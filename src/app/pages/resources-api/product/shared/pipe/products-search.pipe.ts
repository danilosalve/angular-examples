import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productsSearch'
})
export class ProductsSearchPipe implements PipeTransform {
  transform(products: Product[], filter: string): Product[] | undefined {
    if (filter) {
      return products.filter(
        (p: Product) =>
          p.title.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||
          p.category.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())
      );
    } else {
      return products;
    }
  }
}
