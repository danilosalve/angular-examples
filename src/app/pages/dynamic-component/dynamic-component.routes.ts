import { Routes } from '@angular/router';

export const DYNAMIC_ROUTES: Routes = [
  {
    path: '',
    title: 'Componentes Dinâmicos',
    children: [
      {
        path: 'components',
        title: 'Dinâmicos | Componentes',
        loadComponent: () =>
          import('../dynamic-component/dynamic-component.component').then(c => c.DynamicComponentComponent),
      },
      {
        path: 'services',
        title: 'Dinâmicos | Serviços',
        loadComponent: () =>
          import('./dynamic-services/dynamic-services.component').then(c => c.DynamicServicesComponent),
      },
    ],
  },
];
