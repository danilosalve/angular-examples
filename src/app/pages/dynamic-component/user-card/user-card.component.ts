import { Component, inject, input, TemplateRef } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { PoContainerModule } from '@po-ui/ng-components';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [PoContainerModule, JsonPipe],
  templateUrl: './user-card.component.html'
})
export class UserCardComponent {
  readonly userLabel = input.required<TemplateRef<unknown>>();
  dataService = inject(DataService);
}
