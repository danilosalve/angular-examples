import { PoWidgetModule } from '@po-ui/ng-components';
import { Component } from '@angular/core';

import { BaseDeferComponent } from '../base-defer.component';

@Component({
  selector: 'app-hover',
  imports: [PoWidgetModule],
  templateUrl: './hover.component.html'
})
export class HoverComponent extends BaseDeferComponent {}
