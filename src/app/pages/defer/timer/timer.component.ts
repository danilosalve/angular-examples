import { Component } from '@angular/core';
import { PoWidgetModule } from '@po-ui/ng-components';

import { BaseDeferComponent } from '../base-defer.component';

@Component({
  selector: 'app-timer',
  imports: [PoWidgetModule],
  templateUrl: './timer.component.html',
})
export class TimerComponent extends BaseDeferComponent {}
