/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, resource, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  private readonly _apiUrl = 'https://rickandmortyapi.com/api/character';
  private readonly page = signal(1);
  private response = signal<any>([]);

  readonly getPersons = resource({
    request: this.page,
    loader: async ({ request: page, abortSignal }) => {
      try {
        const response = await (await fetch(`${this._apiUrl}/?page=${page}`, { signal: abortSignal })).json();

        if (this.response().length > 0) {
          const results = this.response().concat(response.results);
          this.response.set(results);
        } else {
          this.response.set(response.results);
        }
        return this.response();
      } catch (err) {
        this.handleError(err);
      }
    },
  });

  updatePage(page: number): void {
    this.page.set(page);
  }

  private handleError(error: unknown) {
    // eslint-disable-next-line no-console
    console.error('An error occurred:', error);
    throw error;
  }
}
