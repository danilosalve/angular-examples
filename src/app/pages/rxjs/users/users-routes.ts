import { Routes } from '@angular/router';

import { ListUsersComponent } from './list-users/list-users.component';
import { featureFlagGuard } from '../../../core/feature-flag/guards/feature-flags.guard';

/**
 * @description
 * Rota de usuários.
 */
export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: ListUsersComponent,
    canActivate: [featureFlagGuard(['users'])],
  },
];
