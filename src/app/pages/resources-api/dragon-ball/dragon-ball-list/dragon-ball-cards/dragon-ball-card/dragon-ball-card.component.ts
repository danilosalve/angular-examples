import { PoBadgeModule, PoImageModule, PoTagModule, PoWidgetModule } from '@po-ui/ng-components';
import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Character } from '../../../shared/interfaces/character';
import { ZoomOnHoverDirective } from '../../../../../../shared/directives/zoom-on-hover.directive';

const GENDER_COLOR = {
  Female: 'color-06',
  Male: 'color-02',
  Genderless: 'color-08',
  unknown: 'color-07'
};

const GENDER_VALUE = {
  Female: 'Feminino',
  Male: 'Masculino',
  Genderless: 'Sem gênero',
  unknown: 'Desconhecido'
};

@Component({
  selector: 'app-dragon-ball-card',
  imports: [CommonModule, PoBadgeModule, PoImageModule, PoTagModule, PoWidgetModule, ZoomOnHoverDirective],
  templateUrl: './dragon-ball-card.component.html'
})
export class DragonBallCardComponent {
  readonly item = input.required<Character>();
  readonly height = signal<number>(250);

  getGenderColor(gender: string): string {
    return GENDER_COLOR[gender as keyof typeof GENDER_COLOR];
  }

  getGenderValue(gender: string): string {
    return GENDER_VALUE[gender as keyof typeof GENDER_VALUE];
  }
}
