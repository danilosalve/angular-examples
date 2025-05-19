import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { PoContainerModule, PoImageModule, PoInfoModule } from '@po-ui/ng-components';
import { Person } from '../shared/interfaces/person';

@Component({
  selector: 'app-person-detail',
  imports: [PoImageModule, PoContainerModule, PoInfoModule],
  templateUrl: './person-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailComponent {
  person = input.required<Person>();

  episodes = computed(() => (this.person().episode || []).length);
  image = computed(() => this.person().image || '');
  species = computed(() => this.person().species || '');
  type = computed(() => this.person().type || 'Não informado');
}
