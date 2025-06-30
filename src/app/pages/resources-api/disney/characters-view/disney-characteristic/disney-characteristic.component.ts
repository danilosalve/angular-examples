import { Component, input } from '@angular/core';
import { PoAccordionModule, PoContainerModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-disney-characteristic',
  imports: [PoContainerModule, PoAccordionModule],
  templateUrl: './disney-characteristic.component.html'
})
export class DisneyCharacteristicComponent {
  readonly items = input.required<string[]>();
  readonly title = input.required<string>();
}
