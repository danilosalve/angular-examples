import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { concatMap, from, map, mergeMap, Observable, toArray } from 'rxjs';

import { ListOfPokemonWithDetail, ListPokemon } from '../interfaces/list-pokemon';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private readonly http = inject(HttpClient);

  getById(id: string): Observable<Pokemon> {
    const headers: HttpHeaders = new HttpHeaders({
      'X-PO-Screen-Lock': 'true'
    });
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`, { headers });
  }

  getByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${name}`);
  }

  getByNameWithDetail(name: string): Observable<ListOfPokemonWithDetail> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${name}`).pipe(
      map(results => ({
        count: 1,
        next: null,
        previous: null,
        results: [results]
      }))
    );
  }

  getListPokemons(offset = 0, limit = 12): Observable<ListPokemon> {
    return this.http.get<ListPokemon>(`${this.apiUrl}?limit=${limit}&offset=${offset}`);
  }

  getListPokemonsWithDetail(offset = 0, limit = 12): Observable<ListOfPokemonWithDetail> {
    return this.getListPokemons(offset, limit).pipe(
      mergeMap(response => {
        const { count, next, previous, results } = response;
        return from(results).pipe(
          concatMap(pokemon => this.getByName(pokemon.name)),
          toArray(),
          map(detailsPokemon => ({
            count,
            next,
            previous,
            results: detailsPokemon
          }))
        );
      })
    );
  }
}
