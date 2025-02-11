import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import {
  PoContainerModule,
  PoFieldModule,
  PoLoadingModule,
  PoPageModule,
  PoSearchModule,
  PoSelectComponent,
  PoSelectOption,
} from '@po-ui/ng-components';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../shared/services/products.service';
import { FormsModule } from '@angular/forms';
import { ProductsSearchPipe } from '../shared/pipe/products-search.pipe';
//
@Component({
  selector: 'app-products',
  imports: [
    PoPageModule,
    PoLoadingModule,
    PoContainerModule,
    PoFieldModule,
    PoSearchModule,
    ProductCardComponent,
    FormsModule,
    ProductsSearchPipe,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  readonly filter = signal<string>('');
  readonly filterKeys: string[] = ['title', 'category'];
  readonly limit = signal<number>(10);
  readonly poSelect = viewChild.required(PoSelectComponent);
  readonly productsService = inject(ProductsService);
  readonly productsResource = this.productsService.getProducts;
  readonly optionsLimit: PoSelectOption[] = [
    {
      label: '10',
      value: 10,
    },
    {
      label: '15',
      value: 15,
    },
    {
      label: '30',
      value: 30,
    },
  ];

  ngOnInit(): void {
    this.poSelect().modelValue = this.limit();
  }

  onChangeLimit(limit: number): void {
    this.limit.set(limit);
    this.productsService.updateLimit(this.limit());
  }

  onChangeFilter($event: { filter: string[] | string; value: string }): void {
    this.filter.set($event.value);
  }
}
