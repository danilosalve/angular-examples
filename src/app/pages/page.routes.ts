import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    title: 'Exemplos',
    children: [
      {
        path: 'defer',
        title: 'Carregamento Adiado',
        loadComponent: () => import('./defer/defer.component').then(c => c.DeferComponent)
      },
      {
        path: 'dynamic',
        title: 'Componentes Dinâmicos',
        loadChildren: () => import('./dynamic-component/dynamic-component.routes').then(r => r.DYNAMIC_ROUTES)
      },
      {
        path: 'forms',
        title: 'Formulários',
        loadChildren: () => import('./forms/forms.routes').then(r => r.FORMS_ROUTES)
      },
      {
        path: 'pokedex',
        title: 'Pokémon',
        loadChildren: () => import('./pokedex/pokedex.routes').then(r => r.POKEDEX_ROUTES)
      },
      {
        path: 'notifications',
        title: 'Notificações',
        loadComponent: () => import('./notifications/notifications.component').then(c => c.NotificationsComponent)
      },
      {
        path: 'resources-api',
        title: 'API de recursos Angular',
        loadChildren: () => import('./resources-api/resources-api.routes').then(r => r.RESOURCES_API_ROUTES)
      },
      {
        path: 'rxjs',
        title: 'Exemplos RXJS',
        loadChildren: () => import('./rxjs/rxjs.routes').then(r => r.RXJS_ROUTES)
      },
      {
        path: 'signals',
        title: 'Signals',
        loadChildren: () => import('./signals/signals.routes').then(r => r.SIGNALS_ROUTES)
      },
      {
        path: 'in-memory',
        title: 'Angular In Memory API',
        loadChildren: () => import('./in-memory/in-memory.routes').then(r => r.IN_MEMORY_ROUTES)
      }
    ]
  }
];
