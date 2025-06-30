import { Routes } from '@angular/router';

import { disneyCharacterResolver } from './shared/resolvers/disney-character.resolver';

export const DISNEY_ROUTES: Routes = [
  {
    path: '',
    title: 'Disney | Personagens',
    loadComponent: () => import('./characters-list/characters-list.component').then(c => c.CharactersListComponent)
  },
  {
    path: 'detail/:id',
    title: 'Disney | Detalhes',
    resolve: { character: disneyCharacterResolver },
    loadComponent: () => import('./characters-view/characters-view.component').then(c => c.CharactersViewComponent)
  }
];
