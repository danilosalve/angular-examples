import { Component, input } from '@angular/core';
import { ListOfPokemonWithDetail } from '../../shared/interfaces/list-pokemon';

@Component({
  selector: 'app-pokemon-results',
  imports: [],
  templateUrl: './pokemon-results.component.html',
})
export class PokemonResultsComponent {
  pokemons = input.required<ListOfPokemonWithDetail | null>();
}
