import { Routes } from '@angular/router';

export const SIGNALS_ROUTES: Routes = [
  {
    path: '',
    title: 'Signals',
    children: [
      {
        path: 'samples',
        title: 'Signals | Exemplos',
        loadComponent: () => import('./signals-sample/signals-sample.component').then(c => c.SignalsSampleComponent),
      },
      {
        path: 'form',
        title: 'Signals | Formulários',
        loadComponent: () => import('./signals-form/signals-form.component').then(c => c.SignalsFormComponent),
      },
      {
        path: 'form-simple',
        title: 'Signals | Formulário Simples',
        loadComponent: () =>
          import('./signals-form-simple/signals-form-simple.component').then(c => c.SignalsFormSimpleComponent),
      },
      {
        path: 'store',
        title: 'Signals | Store',
        loadComponent: () => import('./signals-store/signals-store.component').then(c => c.SignalsStoreComponent),
      },
      {
        path: 'vehicle',
        title: 'Signals | Linked',
        loadComponent: () =>
          import('./star-wars-vehicle/star-wars-vehicle.component').then(c => c.StarWarsVehicleComponent),
      },
    ],
  },
];
