import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { UserAPIResponse } from '../interface/user.interface';

import { BASE_API } from '../../../../../app.constraints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly http: HttpClient = inject(HttpClient);

  /**
   * @description
   * Busca os usuários
   *
   * @param page Página
   * @param pageSize Tamanho da página
   */
  getUsers(page = 1, pageSize = 20): Observable<UserAPIResponse> {
    const headers: HttpHeaders = new HttpHeaders({
      page: page,
      pageSize: pageSize,
      Authorization: this.getToken('ADMIN', '1234')
    });

    return this.http.get<UserAPIResponse>(`${BASE_API}/api/framework/getusers`, { headers }).pipe(shareReplay());
  }

  /**
   * @description
   * Gera um token de autenticação
   *
   * @param user Usuário
   * @param password Senha
   */
  private getToken(user: string, password: string): string {
    return `Basic ${btoa(`${user}:${password}`)}`;
  }
}
