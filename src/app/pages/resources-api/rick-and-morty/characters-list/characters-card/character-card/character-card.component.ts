
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { PoWidgetModule, PoImageModule, PoBadgeModule, PoTagModule } from '@po-ui/ng-components';

import { Character } from './../../../shared/interfaces/character-rick-and-morty';
import { ZoomOnHoverDirective } from '../../../../../../shared/directives/zoom-on-hover.directive';
import { DeviceService } from '../../../../../../shared/services/device.service';

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
  selector: 'app-character-card',
  imports: [PoBadgeModule, PoImageModule, PoTagModule, PoWidgetModule, ZoomOnHoverDirective],
  templateUrl: './character-card.component.html'
})
export class CharacterCardComponent implements OnInit {
  readonly item = input.required<Character>();
  readonly height = signal<number>(250);

  private readonly device = inject(DeviceService);

  ngOnInit(): void {
    if (this.device.isSmartPhone()) {
      this.height.set(0);
    }
  }

  getGenderColor(gender: string): string {
    return GENDER_COLOR[gender as keyof typeof GENDER_COLOR];
  }

  getGenderValue(gender: string): string {
    return GENDER_VALUE[gender as keyof typeof GENDER_VALUE];
  }
}
