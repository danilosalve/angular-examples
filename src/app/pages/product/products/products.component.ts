import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import {
  PoContainerModule,
  PoFieldModule,
  PoLoadingModule,
  PoPageModule,
  PoSelectComponent,
  PoSelectOption,
} from '@po-ui/ng-components';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../shared/services/products.service';
import { FormsModule } from '@angular/forms';
//
@Component({
  selector: 'app-products',
  imports: [PoPageModule, PoLoadingModule, PoContainerModule, PoFieldModule, ProductCardComponent, FormsModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
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
}
