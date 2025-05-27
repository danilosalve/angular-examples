import { Component, inject, signal, viewChild } from '@angular/core';
import { PoModalComponent, PoModalModule, PoPageModule } from '@po-ui/ng-components';

import { Person } from './shared/interfaces/person';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonsService } from './shared/services/persons.service';
@Component({
  selector: 'app-persons',
  imports: [PoPageModule, PoModalModule, PersonsListComponent, PersonDetailComponent],
  templateUrl: './persons.component.html'
})
export class PersonsComponent {
  readonly modal = viewChild.required(PoModalComponent);
  readonly page = signal(1);
  readonly personsService = inject(PersonsService);
  readonly personsResource = this.personsService.getPersons;
  readonly person = signal<Person | undefined>(undefined);

  loadPersons(): void {
    this.page.update(page => page + 1);
    this.personsService.updatePage(this.page());
  }

  restartPersons(): void {
    this.personsResource.reload();
  }

  viewDetail(person: Person): void {
    this.person.set(person);
    this.modal().open();
  }
}
