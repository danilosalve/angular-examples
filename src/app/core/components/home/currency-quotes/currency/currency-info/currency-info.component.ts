import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PoIconModule, PoInfoModule, PoPopoverModule, PoTooltipModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-currency-info',
  imports: [PoIconModule, PoInfoModule, PoPopoverModule, PoTooltipModule],
  templateUrl: './currency-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyInfoComponent {
  readonly label = input.required<string>();
  readonly help = input<string>('');
  readonly value = input.required<string>();
}
