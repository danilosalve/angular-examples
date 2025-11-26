import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import { PoInfoModule, PoInfoOrientation } from '@po-ui/ng-components';
import { Climate } from '../shared/interfaces/climate';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-good-child',
  imports: [PoInfoModule, JsonPipe],
  templateUrl: './good-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodChildComponent {
  readonly climate = input<Climate | null>(null);
  readonly cityName = computed(() => (this.climate() ? this.climate()?.cidade : 'Carregando...'));
  readonly clima = computed(() => (this.climate() ? this.climate()?.clima : []));
  readonly dateOfUpdate = computed(() => (this.climate() ? this.climate()?.atualizado_em : ''));
  readonly state = computed(() => (this.climate() ? this.climate()?.estado : ''));
  protected readonly infoOrientation = PoInfoOrientation.Horizontal;

  constructor() {
    effect(() => {
      // eslint-disable-next-line no-console
      console.log(this.climate());
    });
  }
}
