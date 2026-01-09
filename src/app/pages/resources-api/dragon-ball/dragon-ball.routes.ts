import { Routes } from '@angular/router';

export const DBZ_ROUTES: Routes = [
  {
    path: '',
    title: 'Dragon Ball | Lista de personagens',
    loadComponent: () => import('./dragon-ball-list/dragon-ball-list.component').then(c => c.DragonBallListComponent)
  }
];
