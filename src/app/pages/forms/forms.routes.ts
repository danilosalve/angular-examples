import { Routes } from '@angular/router';

import { ControlContainerComponent } from './control-container/control-container.component';

export const FORMS_ROUTES: Routes = [
  {
    path: '',
    title: 'Formulários',
    children: [
      {
        path: 'container-form',
        pathMatch: 'full',
        title: 'Formulários | Control Container',
        component: ControlContainerComponent,
      },
    ],
  },
];
