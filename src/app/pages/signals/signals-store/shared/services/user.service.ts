import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);

  getUsers(query = ''): Observable<User[]> {
    return this.http.get<{ users: User[] }>('assets/json/user.db.json').pipe(
      map(res => res.users),
      map(users => {
        if (!query) return users;
        return users.filter(
          user =>
            user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
            user.nickname.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
            user.email.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
      })
    );
  }
}
