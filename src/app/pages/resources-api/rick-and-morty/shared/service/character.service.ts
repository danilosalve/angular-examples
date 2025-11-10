import { Injectable, resource, ResourceRef, signal } from '@angular/core';

import { Character } from '../interfaces/character-rick-and-morty';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';
  private readonly name = signal('');
  private readonly page = signal(1);
  private characters: Character[] = [];

  readonly getCharacters: ResourceRef<Character[]> = resource({
    request: () => ({page: this.page(), name: this.name()}),
    loader: async ({ request, abortSignal }) => {
      const {page, name} = request;
      try {
        let response = await (await fetch(`${this.apiUrl}/?page=${page}&name=${name}`, { signal: abortSignal })).json();

        if (this.characters.length > 0) {
          this.characters = this.characters.concat(response.results);
        } else {
          this.characters = response.results;
        }

        response = this.characters;

        return response;
      } catch (err) {
        this.handleError(err);
      }
    }
  });

  updatePage(page: number): void {
    this.page.set(page);
  }

  setFilter(filter: string): void {
    this.characters = [];
    this.page.set(1);
    this.name.set(filter);
  }

  private handleError(error: unknown) {
    throw error;
  }
}
