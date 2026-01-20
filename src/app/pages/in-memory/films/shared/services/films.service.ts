/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

import { Film } from '../interface/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private readonly apiUrl = 'api/films';
  private readonly http = inject(HttpClient);

  /**
   * Lista todos os filmes - sem Paginação
   * @returns Observable com lista de filmes
   */
  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.apiUrl}`).pipe(take(1));
  }

  /**
   * Lista todos os filmes com o nome
   * @param {string} name nome do filme
   * @returns Observable com a lista de filmes que corresponde ao nome informado
   */
  getByName(name: string): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.apiUrl}?name=${name}`).pipe(take(1));
  }

  /**
   * Obtem um filme espécifico, buscando pelo identificador do filme
   * @param {number | string} id identificador do filme
   * @returns Observable com o Filme
   */
  getById(id: number | string): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${id}`).pipe(take(1));
  }

  /**
   * Adicionar um novo filme
   * @param film filme
   */
  create(film: Film): Observable<any> {
    return this.http.post<Film>(`${this.apiUrl}`, film).pipe(take(1));
  }

  /**
   * Alterar um filme
   * @param film Filme
   * @param {number | string} id identificador do filme
   */
  put(film: Film, id: number | string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, film).pipe(take(1));
  }

  /**
   * Excluir um filme da lista
   * @param {number | string} id identificador do filme
   */
  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(take(1));
  }
}
