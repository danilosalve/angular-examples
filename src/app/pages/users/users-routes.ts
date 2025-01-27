import { Routes } from '@angular/router';

import { ListUsersComponent } from './list-users/list-users.component';

/**
 * @description
 * Rota de usuários.
 */
export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: ListUsersComponent,
  },
];
