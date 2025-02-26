import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon';

export const pokemonResolver: ResolveFn<Pokemon> = route => {
  return inject(PokemonService).getById(route.paramMap?.get('id') || '0');
};
