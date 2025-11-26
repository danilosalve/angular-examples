import { Component, inject } from '@angular/core';
import {
  PoButtonModule,
  PoContainerModule,
  PoIconModule,
  PoInfoModule,
  PoInfoOrientation,
  PoTooltipModule
} from '@po-ui/ng-components';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-store',
  imports: [PoButtonModule, PoContainerModule, PoIconModule, PoInfoModule, PoTooltipModule],
  providers: [CounterStore],
  templateUrl: './store.component.html'
})
export class StoreComponent {
  protected readonly store = inject(CounterStore);
  protected readonly infoOrientation = PoInfoOrientation.Horizontal;
}
