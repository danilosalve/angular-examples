import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  // {
  //   path: 'home',
  //   pathMatch: 'full',
  //   loadComponent: () =>
  //     import('./pages/home/home.component').then((c) => c.HomeComponent),
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(r => r.HOME_ROUTES)
  }
  // {
  //   path: 'signal-form',
  //   loadChildren: () =>
  //     import('./pages/signals-form/signals-form.routes').then(
  //       (r) => r.SIGNALS_FORM_ROUTES
  //     ),
  // },
  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./pages/users/users-routes').then((r) => r.USERS_ROUTES),
  // },
];
