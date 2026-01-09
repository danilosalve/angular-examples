import { Component, input } from '@angular/core';

import { Character } from '../../shared/interfaces/character';
import { DragonBallCardComponent } from './dragon-ball-card/dragon-ball-card.component';

@Component({
  selector: 'app-dragon-ball-cards',
  imports: [DragonBallCardComponent],
  templateUrl: './dragon-ball-cards.component.html'
})
export class DragonBallCardsComponent {
  readonly items = input.required<Character[]>();
  readonly isLoading = input<boolean>(false);
}
