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
  readonly person = input.required<Person>();

  readonly episodes = computed(() => (this.person().episode || []).length);
  readonly image = computed(() => this.person().image || '');
  readonly species = computed(() => this.person().species || '');
  readonly type = computed(() => this.person().type || 'Não informado');
}
