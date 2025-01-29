import { Component } from '@angular/core';
import { PoWidgetModule } from '@po-ui/ng-components';
import { BaseDeferComponent } from '../base-defer.component';

@Component({
  selector: 'app-viewport',
  imports: [PoWidgetModule],
  templateUrl: './viewport.component.html'
})
export class ViewportComponent extends BaseDeferComponent {
  isHidden: boolean = true;

  onClick(): void {
    this.isHidden = false;
  }
}
