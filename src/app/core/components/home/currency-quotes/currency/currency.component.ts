import { CurrencyInfoComponent } from './currency-info/currency-info.component';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PoWidgetModule } from '@po-ui/ng-components';
import { CurrencyInfo } from '../shared/interfaces/currency-info';

@Component({
  selector: 'app-currency',
  imports: [PoWidgetModule, CurrencyInfoComponent],
  templateUrl: './currency.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent {
  readonly info = input.required<CurrencyInfo>();
  protected readonly ask = computed(() => this.info().ask);
  protected readonly bid = computed(() => this.info().bid);
  protected readonly low = computed(() => this.info().low);
  protected readonly high = computed(() => this.info().high);
  protected readonly name = computed(() => this.info().name);
}
