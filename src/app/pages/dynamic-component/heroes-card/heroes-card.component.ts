import { Component, inject, input, TemplateRef } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { PoContainerModule, PoNotificationService, PoWidgetModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-heroes-card',
  imports: [PoContainerModule, PoWidgetModule],
  templateUrl: './heroes-card.component.html'
})
export class HeroesCardComponent {
  readonly heroes = input.required<TemplateRef<unknown>>();
  poNotificationService = inject(PoNotificationService);
  dataService = inject(DataService);

  onShowAlert(name: string): void {
    this.poNotificationService.information(`O nome do Heroi é ${name}`);
  }
}
