import { Component, input, output } from '@angular/core';
import { PoButtonModule, PoContainerModule, PoLoadingModule } from '@po-ui/ng-components';

import { ListOfPokemonWithDetail } from '../../shared/interfaces/list-pokemon';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-list-of-pokemons-cards',
  imports: [PoContainerModule, PoLoadingModule, PokemonCardComponent, PoButtonModule],
  templateUrl: './list-of-pokemons-cards.component.html'
})
export class ListOfPokemonsCardsComponent {
  readonly pokemons = input.required<ListOfPokemonWithDetail | null>();
  readonly isLoadShowMore = input<boolean>(false);
  readonly isHideLoading = input<boolean>(false);
  showMore = output();

  onShowMore(): void {
    this.showMore.emit();
  }
}
