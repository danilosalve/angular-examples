import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Product } from '../interfaces/product';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiUrl = 'https://fakestoreapi.com/products';
  private readonly productId = signal<number>(0);
  private readonly limit = signal<number>(10);
  private readonly http = inject(HttpClient);

  readonly getProducts = rxResource({
    request: this.limit,
    loader: ({ request: limit }) => {
      return this.http.get<Product[]>(`${this.apiUrl}?limit=${limit}`).pipe(shareReplay(1));
    },
  });

  readonly getProductById = rxResource({
    request: this.productId,
    loader: ({ request: id }) => {
      return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(shareReplay(1));
    },
  });

  updateProduct(id: number): void {
    this.productId.set(id);
  }

  updateLimit(limit: number): void {
    this.limit.set(limit);
  }
}
