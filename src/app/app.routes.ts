import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.routes').then(r => r.HOME_ROUTES)
  }
];
