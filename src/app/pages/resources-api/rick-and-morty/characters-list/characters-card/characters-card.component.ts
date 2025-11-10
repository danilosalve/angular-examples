import { Component, input } from '@angular/core';
import { PoLoadingModule } from '@po-ui/ng-components';

import { Character } from './../../shared/interfaces/character-rick-and-morty';
import { CharacterCardComponent } from './character-card/character-card.component';

@Component({
  selector: 'app-characters-card',
  imports: [CharacterCardComponent, PoLoadingModule],
  templateUrl: './characters-card.component.html'
})
export class CharactersCardComponent {
  readonly items = input.required<Character[]>();
  readonly isLoading = input<boolean>(false);
}
