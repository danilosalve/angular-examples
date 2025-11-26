import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PoContainerModule, PoIconModule, PoTooltipModule } from '@po-ui/ng-components';

import { GoodChildComponent } from './good-child/good-child.component';
import { ClimateService } from './shared/services/climate.service';
import { Climate } from './shared/interfaces/climate';

@Component({
  selector: 'app-to-signal',
  imports: [PoContainerModule, PoIconModule, PoTooltipModule, GoodChildComponent],
  templateUrl: './to-signal.component.html'
})
export class ToSignalComponent {
  private readonly api = inject(ClimateService);
  protected readonly climate = toSignal<Climate | null>(this.api.getClimateToSP(), {
    initialValue: null
  });
}
