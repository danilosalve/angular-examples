import { Routes } from '@angular/router';

export const RXJS_ROUTES: Routes = [
  {
    path: 'replay',
    title: 'Share Replay',
    loadComponent: () => import('./replay/replay.component').then(c => c.ReplayComponent)
  },
  {
    path: 'users',
    title: 'Usuários | Async',
    loadChildren: () => import('./users/users-routes').then(r => r.USERS_ROUTES)
  }
];
