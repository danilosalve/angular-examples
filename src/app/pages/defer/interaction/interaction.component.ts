import { Component } from '@angular/core';
import { PoWidgetModule } from '@po-ui/ng-components';

import { BaseDeferComponent } from '../base-defer.component';

@Component({
  selector: 'app-interaction',
  imports: [PoWidgetModule],
  templateUrl: './interaction.component.html',
})
export class InteractionComponent extends BaseDeferComponent {}
