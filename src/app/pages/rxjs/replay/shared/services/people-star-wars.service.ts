import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, shareReplay, Subscription, tap, timer } from 'rxjs';
import { StarWarsPeopleList } from '../interface/star-wars-people-list';

@Injectable({
  providedIn: 'root'
})
export class PeopleStarWarsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://swapi.py4e.com/api/people';
  private data$!: Observable<StarWarsPeopleList>;
  private cacheTimer$!: Subscription;
  private currentSearch = '';
  readonly #timer: WritableSignal<number> = signal<number>(0);

  get timer(): WritableSignal<number> {
    return this.#timer;
  }

  findPeopleWithCache(search: string): Observable<StarWarsPeopleList> {
    this.compareSearchValue(search);

    if (!this.data$) {
      this.data$ = this.http.get<StarWarsPeopleList>(`${this.apiUrl}/?search=${search}&page=1`).pipe(
        shareReplay({ bufferSize: 2, refCount: true, windowTime: 10000 }),
        tap(() => this.#timer.set(10))
      );
      // Quando o timer expirar, a próxima chamada a `getData()` forçará uma nova requisição
      this.cacheTimer$ = timer(10000).subscribe(() => this.clearObservable());
    }

    return this.data$;
  }

  private compareSearchValue(search: string): void {
    if (this.currentSearch !== search) {
      this.clearObservable();
      if (this.cacheTimer$) {
        this.cacheTimer$.unsubscribe();
      }
      this.currentSearch = search;
    }
  }

  private clearObservable(): void {
    this.#timer.set(0);
    this.data$ = undefined as unknown as Observable<StarWarsPeopleList>;
  }
}
