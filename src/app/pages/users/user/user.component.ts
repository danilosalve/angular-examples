import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../shared/interface/user.interface';
import { PoInfoModule, PoWidgetModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, PoWidgetModule, PoInfoModule],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  users: InputSignal<User[]> = input.required<User[]>();
}
