import { Component, inject, model } from '@angular/core';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';

import { ChildFormComponent } from './child-form/child-form.component';
import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';
import { DeviceService } from '../../../shared/services/device.service';

@Component({
  selector: 'app-signals-form-simple',
  imports: [PoPageModule, ChildFormComponent, PoContainerModule],
  templateUrl: './signals-form-simple.component.html'
})
export class SignalsFormSimpleComponent extends BaseDetailComponent {
  private readonly deviceService = inject(DeviceService);

  firstName = model<string>('');
  lastName = model<string>('');
  age = model<number>(0);
  containerHeight = this.deviceService.isSmartPhone() || this.deviceService.isTable() ? 0 : 340;

  constructor() {
    super('signals/samples');
  }
}
