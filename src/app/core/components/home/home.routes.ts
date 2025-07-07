import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    title: 'Página Inicial',
    loadComponent: () => import('./home.component').then(c => c.HomeComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Página Inicial',
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
      },
      {
        path: 'access-denied',
        title: 'Acesso negado',
        loadComponent: () =>
          import('../errors/access-denied/access-denied.component').then(c => c.AccessDeniedComponent)
      },
      {
        path: 'sample',
        title: 'Exemplos',
        loadChildren: () => import('../../../pages/page.routes').then(r => r.PAGES_ROUTES)
      }
    ]
  }
];
