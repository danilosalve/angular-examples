import { Routes } from '@angular/router';

export const IN_MEMORY_ROUTES: Routes = [
  {
    path: 'films',
    title: 'Filmes',
    loadChildren: () => import('./films/films.routes').then(r => r.FILMS)
  }
];
