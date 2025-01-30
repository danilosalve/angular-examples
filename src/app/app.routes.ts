import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.routes').then(r => r.HOME_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    loadComponent: () => import('./core/errors/not-found/not-found.component').then(c => c.NotFoundComponent),
  },
];
