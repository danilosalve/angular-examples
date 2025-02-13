import { Component, input } from '@angular/core';
import { PoContainerModule, PoImageModule, PoInfoModule } from '@po-ui/ng-components';
import { Person } from '../shared/interfaces/person';

@Component({
  selector: 'app-person-detail',
  imports: [PoImageModule, PoContainerModule, PoInfoModule],
  templateUrl: './person-detail.component.html',
})
export class PersonDetailComponent {
  person = input.required<Person>();
}
