import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay, timer } from 'rxjs';
import { StarWarsPeopleList } from '../interface/star-wars-people-list';

@Injectable({
  providedIn: 'root',
})
export class PeopleStarWarsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://swapi.py4e.com/api/people';
  private data$!: Observable<StarWarsPeopleList>;
  private cacheTimer$ = timer(5000);
  private currentSearch = '';

  findPeopleWithCache(search: string): Observable<StarWarsPeopleList> {
    this.compareSearchValue(search);

    if (!this.data$) {
      this.data$ = this.http
        .get<StarWarsPeopleList>(`${this.apiUrl}/?search=${search}&page=1`)
        .pipe(shareReplay({ bufferSize: 1, refCount: true, windowTime: 5000 }));
      // Quando o timer expirar, a próxima chamada a `getData()` forçará uma nova requisição
      this.cacheTimer$.subscribe(() => this.clearObservable());
    }

    return this.data$;
  }

  private compareSearchValue(search: string): void {
    if (this.currentSearch !== search) {
      this.clearObservable();
      this.currentSearch = search;
    }
  }

  private clearObservable(): void {
    this.data$ = undefined as unknown as Observable<StarWarsPeopleList>;
  }
}
