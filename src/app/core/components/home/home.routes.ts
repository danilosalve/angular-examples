import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página Inicial',
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Página Inicial',
        component: DashboardComponent,
      },
      {
        path: 'defer',
        title: 'Carregamento Adiado',
        loadComponent: () => import('../../../pages/defer/defer.component').then(c => c.DeferComponent),
      },
      {
        path: 'dynamic',
        title: 'Componentes Dinâmicos',
        loadChildren: () =>
          import('../../../pages/dynamic-component/dynamic-component.routes').then(r => r.DYNAMIC_ROUTES),
      },
      {
        path: 'forms',
        title: 'Formulários',
        loadChildren: () => import('../../../pages/forms/forms.routes').then(r => r.FORMS_ROUTES),
      },
      {
        path: 'pokedex',
        title: 'Pokémon',
        loadChildren: () => import('../../../pages/pokedex/pokedex.routes').then(r => r.POKEDEX_ROUTES),
      },
      {
        path: 'notifications',
        title: 'Notificações',
        loadComponent: () =>
          import('../../../pages/notifications/notifications.component').then(c => c.NotificationsComponent),
      },
      {
        path: 'resources-api',
        title: 'API de recursos Angular',
        loadChildren: () =>
          import('../../../pages/resources-api/resources-api.routes').then(r => r.RESOURCES_API_ROUTES),
      },
      {
        path: 'rxjs',
        title: 'Exemplos RXJS',
        loadChildren: () => import('../../../pages/rxjs/rxjs.routes').then(r => r.RXJS_ROUTES),
      },
      {
        path: 'signals',
        title: 'Signals',
        loadChildren: () => import('../../../pages/signals/signals.routes').then(r => r.SIGNALS_ROUTES),
      },
      {
        path: 'access-denied',
        title: 'Acesso negado',
        loadComponent: () =>
          import('../errors/access-denied/access-denied.component').then(c => c.AccessDeniedComponent),
      },
    ],
  },
];
