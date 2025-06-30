import { AfterViewInit, ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { PoSearchFilterMode, PoTableAction, PoTableModule } from '@po-ui/ng-components';

import { PersonsService } from './../shared/services/persons.service';
import { Person } from '../shared/interfaces/person';
import { BaseTableComponent } from '../../../../shared/components/base/base-table.component';
@Component({
  selector: 'app-persons-list',
  imports: [PoTableModule],
  templateUrl: './persons-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class PersonsListComponent extends BaseTableComponent implements AfterViewInit {
  readonly persons = input.required<Person[]>();
  readonly isLoading = input<boolean>(false);
  readonly viewDetailPerson = output<Person>();
  readonly loadMorePersons = output();

  private readonly personsService = inject(PersonsService);

  readonly columns = this.personsService.getColumns();
  readonly filterType = PoSearchFilterMode.contains;
  readonly actions: PoTableAction[] = [
    {
      label: 'Compartilhar',
      action: this.viewDetail.bind(this),
      icon: 'an an-share',
      disabled: true
    },
    {
      label: 'Detalhes',
      action: this.viewDetail.bind(this),
      icon: 'an an-arrow-square-in'
    }
  ];

  constructor() {
    const elements = ['.po-page-header', '.po-row po-table-footer-show-more ng-star-inserted'];
    super(400, elements);
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  loadPersons(): void {
    this.loadMorePersons.emit();
  }

  viewDetail(person: Person): void {
    this.viewDetailPerson.emit(person);
  }
}
