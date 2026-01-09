import { Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { ListCharacters } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private readonly apiUrl = 'https://dragonball-api.com/api/characters';
  private readonly limit = signal<number>(10);
  private readonly name = signal<string>('');
  private readonly page = signal<number>(1);

  /**
   * Obtem uma lista de personagens do Dragon Ball com páginação
   */
  readonly getCharacters = httpResource<ListCharacters>(() => ({
    url: this.apiUrl,
    method: 'GET',
    params: { page: this.page(), limit: this.limit(), name: this.name() }
  }));

  setLimit(limit: number): void {
    this.limit.set(limit);
  }

  setName(name: string): void {
    this.page.set(1);
    this.name.set(name);
  }

  setPage(page: number): void {
    this.page.set(page);
  }
}
