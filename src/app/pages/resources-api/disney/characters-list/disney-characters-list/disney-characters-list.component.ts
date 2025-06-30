import { Component, input, output } from '@angular/core';
import { PoLoadingModule } from '@po-ui/ng-components';

import { CharacterDisney } from '../../shared/interfaces/character-disney';
import { DisneyCharacterCardComponent } from './disney-character-card/disney-character-card.component';

@Component({
  selector: 'app-disney-characters-list',
  imports: [DisneyCharacterCardComponent, PoLoadingModule],
  templateUrl: './disney-characters-list.component.html'
})
export class DisneyCharactersListComponent {
  readonly items = input.required<CharacterDisney[]>();
  readonly isLoading = input<boolean>(false);
  readonly viewDetail = output<CharacterDisney>();

  onViewDetail(character: CharacterDisney): void {
    this.viewDetail.emit(character);
  }
}
