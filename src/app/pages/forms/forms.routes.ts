import { Routes } from '@angular/router';

export const FORMS_ROUTES: Routes = [
  {
    path: '',
    title: 'Formulários',
    children: [
      {
        path: 'container-form',
        pathMatch: 'full',
        title: 'Formulários | Control Container',
        loadComponent: () =>
          import('./control-container/control-container.component').then(c => c.ControlContainerComponent),
      },
      {
        path: 'form-record',
        title: 'Formulários | Form Record',
        loadComponent: () => import('./form-record/form-record.component').then(c => c.FormRecordComponent),
      },
    ],
  },
];
