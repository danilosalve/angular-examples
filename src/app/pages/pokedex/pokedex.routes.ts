import { Routes } from '@angular/router';

import { pokemonResolver } from './shared/resolver/pokemon.resolver';

export const POKEDEX_ROUTES: Routes = [
  {
    path: '',
    title: 'Lista de Pokémons',
    loadComponent: () => import('./pokemon-list/pokemon-list.component').then(c => c.PokemonListComponent),
  },
  {
    path: 'detail/:id',
    title: 'Detalhe do Pokémon',
    resolve: { pokemon: pokemonResolver },
    loadComponent: () => import('./pokemon-detail/pokemon-detail.component').then(c => c.PokemonDetailComponent),
  },
];
