import { Component, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { PoTagModule } from '@po-ui/ng-components';

import { POKEMON_TYPE } from '../../helpers/pokemon-type-constants';

@Component({
  selector: 'app-types-of-pokemon',
  imports: [PoTagModule, TitleCasePipe],
  templateUrl: './types-of-pokemon.component.html'
})
export class TypesOfPokemonComponent {
  typeofPokemon = input.required<string>();

  getColor(type: string): string {
    return POKEMON_TYPE[type as keyof typeof POKEMON_TYPE].color || '';
  }

  translateLabel(type: string): string {
    return POKEMON_TYPE[type as keyof typeof POKEMON_TYPE].label || '';
  }
}
