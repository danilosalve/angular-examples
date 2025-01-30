import { Component } from '@angular/core';
import { PoWidgetModule } from '@po-ui/ng-components';

import { BaseDeferComponent } from '../base-defer.component';

@Component({
  selector: 'app-when',
  imports: [PoWidgetModule],
  templateUrl: './when.component.html',
})
export class WhenComponent extends BaseDeferComponent {
  isShow = false;

  onClick(): void {
    this.isShow = true;
  }
}
