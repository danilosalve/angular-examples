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
        component: DashboardComponent
      },
      {
        path: 'defer',
        title: 'Carregamento Adiado',
        loadComponent: () => import('../defer/defer.component').then(c => c.DeferComponent)
      },
      {
        path: 'dynamic-component',
        title: 'Componentes Dinâmicos',
        loadComponent: () => import('../dynamic-component/dynamic-component.component').then(c => c.DynamicComponentComponent)
      },
      {
        path: 'forms',
        title: 'Formulários',
        loadChildren: () => import('../forms/forms.routes').then(r => r.FORMS_ROUTES)
      },
      {
        path: 'signals',
        title: 'Signals',
        loadChildren: () => import('../signals/signals.routes').then(r => r.SIGNALS_ROUTES)
      },
      {
        path: 'users',
        title: 'Usuários',
        loadChildren: () => import('../users/users-routes').then(r => r.USERS_ROUTES)
      }
    ]
  }
];
