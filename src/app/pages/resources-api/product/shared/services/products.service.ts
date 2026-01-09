import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Product } from '../interfaces/product';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly apiUrl = 'https://fakestoreapi.com/products';
  private readonly limit = signal<number>(10);
  private readonly http = inject(HttpClient);

  readonly getProducts = rxResource({
    params: () => ({ limit: this.limit() }),
    stream: ({ params }) => {
      return this.http.get<Product[]>(`${this.apiUrl}?limit=${params.limit}`).pipe(shareReplay(1));
    }
  });

  updateLimit(limit: number): void {
    this.limit.set(limit);
  }
}
