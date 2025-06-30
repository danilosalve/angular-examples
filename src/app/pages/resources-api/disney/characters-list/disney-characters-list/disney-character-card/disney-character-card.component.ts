import { PoImageModule, PoWidgetModule } from '@po-ui/ng-components';
import { Component, input, output } from '@angular/core';
import { CharacterDisney } from '../../../shared/interfaces/character-disney';

@Component({
  selector: 'app-disney-character-card',
  imports: [PoWidgetModule, PoImageModule],
  templateUrl: './disney-character-card.component.html'
})
export class DisneyCharacterCardComponent {
  readonly item = input.required<CharacterDisney>();
  readonly viewDetail = output<CharacterDisney>();

  onViewDetail(): void {
    this.viewDetail.emit(this.item());
  }

  onTitleAction(): void {
    window.open(this.item().sourceUrl, '_blank');
  }
}
