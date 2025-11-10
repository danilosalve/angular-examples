import { Routes } from '@angular/router';

export const RICK_AND_MORTY_ROUTES: Routes = [
  {
    path: '',
    title: 'Rick & Morty | Lista de personagens',
    loadComponent: () => import('./characters-list/characters-list.component').then(c => c.CharactersListComponent)
  }
];
