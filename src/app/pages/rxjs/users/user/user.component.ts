import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, ChangeDetectionStrategy } from '@angular/core';
import { PoInfoModule, PoTooltipModule, PoWidgetModule } from '@po-ui/ng-components';

import { User } from '../shared/interface/user.interface';

@Component({
  selector: 'app-user',
  imports: [CommonModule, PoWidgetModule, PoInfoModule, PoTooltipModule],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  users: InputSignal<User[]> = input.required<User[]>();
}
