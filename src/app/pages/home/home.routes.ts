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
        path: 'signal-form',
        title: 'Formulário Signals',
        loadChildren: () => import('../signals-form/signals-form.routes').then(r => r.SIGNALS_FORM_ROUTES)
      },
      {
        path: 'users',
        title: 'Usuários',
        loadChildren: () => import('../users/users-routes').then(r => r.USERS_ROUTES)
      },
      {
        path: 'signal-sample',
        title: 'Examplos Sinais',
        loadComponent: () => import('../signals-sample/signals-sample.component').then(c => c.SignalsSampleComponent)
      },
      {
        path: 'dynamic-component',
        title: 'Componentes Dinâmicos',
        loadComponent: () => import('../dynamic-component/dynamic-component.component').then(c => c.DynamicComponentComponent)
      }
    ]
  }
];
