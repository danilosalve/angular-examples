import { PoImageModule, PoWidgetModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { CharacterDisney } from '../../../shared/interfaces/character-disney';
import { ZoomOnHoverDirective } from './../../../../../../shared/directives/zoom-on-hover.directive';

@Component({
  selector: 'app-disney-character-card',
  imports: [CommonModule, PoWidgetModule, PoImageModule, ZoomOnHoverDirective],
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
