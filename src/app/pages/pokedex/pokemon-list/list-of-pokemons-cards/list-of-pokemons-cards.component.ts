import { Component, input, output } from '@angular/core';
import { PoContainerModule, PoLoadingModule } from '@po-ui/ng-components';

import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { ListOfPokemonWithDetail } from '../../shared/interfaces/list-pokemon';
import { ShowMoreButtonComponent } from './../../../../shared/components/show-more-button/show-more-button.component';

@Component({
  selector: 'app-list-of-pokemons-cards',
  imports: [PoContainerModule, PoLoadingModule, PokemonCardComponent, ShowMoreButtonComponent],
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
