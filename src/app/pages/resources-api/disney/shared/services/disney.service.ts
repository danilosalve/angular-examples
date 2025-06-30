import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map, Observable, shareReplay } from 'rxjs';

import { DisneyCharactersApiResponse } from './../interfaces/disney-characters-api-response';
import { DisneyCharacterApiResponse } from '../interfaces/disney-character-api-response';

@Injectable({
  providedIn: 'root'
})
export class DisneyService {
  readonly name = signal('');
  readonly page = signal(1);
  readonly pageSize = signal(12);

  private readonly apiUrl = 'https://api.disneyapi.dev/character';
  private readonly http = inject(HttpClient);

  readonly getCharacters = rxResource<DisneyCharactersApiResponse, { page: number; size: number; name: string }>({
    request: () => ({ page: this.page(), size: this.pageSize(), name: this.name() }),
    loader: ({ request: { page, size, name } }) =>
      this.http.get<DisneyCharactersApiResponse>(`${this.apiUrl}?page=${page}&pageSize=${size}&name=${name}`).pipe(
        shareReplay(1),
        map(response => ({
          ...response,
          data: Array.isArray(response.data) ? response.data : [response.data]
        }))
      )
  });

  updatePagination(page: number, size: number): void {
    this.page.set(page);
    this.pageSize.set(size);
  }

  setFilter(filter: string): void {
    this.page.set(1);
    this.pageSize.set(12);
    this.name.set(filter);
  }

  getCharacterById(id: string): Observable<DisneyCharacterApiResponse> {
    return this.http.get<DisneyCharacterApiResponse>(`${this.apiUrl}/${id}`);
  }
}
