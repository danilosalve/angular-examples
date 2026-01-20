import { PoLoadingModule } from '@po-ui/ng-components';
import { Component, input, output } from '@angular/core';

import { Film } from '../../shared/interface/films';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-cards',
  imports: [PoLoadingModule, CardComponent],
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  readonly items = input.required<Film[]>();
  readonly editAction = output<number>();
  readonly viewAction = output<number>();
  readonly isLoading = input<boolean>(false);

  onClickEdit(id: number): void {
    this.editAction.emit(id);
  }

  onClickView(id: number): void {
    this.viewAction.emit(id);
  }
}
