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
        loadComponent: () => import('../defer/defer.component').then(c => c.DeferComponent),
      },
      {
        path: 'dynamic',
        title: 'Componentes Dinâmicos',
        loadChildren: () => import('../dynamic-component/dynamic-component.routes').then(r => r.DYNAMIC_ROUTES),
      },
      {
        path: 'forms',
        title: 'Formulários',
        loadChildren: () => import('../forms/forms.routes').then(r => r.FORMS_ROUTES),
      },
      {
        path: 'persons',
        title: 'Rick & Morty | Personagens',
        loadComponent: () => import('../persons/persons.component').then(c => c.PersonsComponent),
      },
      {
        path: 'products',
        title: 'Produtos',
        loadChildren: () => import('../product/product.routes').then(r => r.PRODUCT_ROUTES),
      },
      {
        path: 'signals',
        title: 'Signals',
        loadChildren: () => import('../signals/signals.routes').then(r => r.SIGNALS_ROUTES),
      },
      {
        path: 'users',
        title: 'Usuários',
        loadChildren: () => import('../users/users-routes').then(r => r.USERS_ROUTES),
      },
    ],
  },
];
