import { AfterViewInit, ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { PoSearchFilterMode, PoTableAction, PoTableModule } from '@po-ui/ng-components';

import { PersonsService } from './../shared/services/persons.service';
import { Person } from '../shared/interfaces/person';
@Component({
  selector: 'app-persons-list',
  imports: [PoTableModule],
  templateUrl: './persons-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class PersonsListComponent implements AfterViewInit {
  readonly persons = input.required<Person[]>();
  readonly isLoading = input<boolean>(false);
  readonly viewDetailPerson = output<Person>();
  readonly loadMorePersons = output();

  private readonly personsService = inject(PersonsService);
  columns = this.personsService.getColumns();
  height = 400;
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

  onResize(): void {
    setTimeout(() => this.setHeight(), 200);
  }

  loadPersons(): void {
    this.loadMorePersons.emit();
  }

  viewDetail(person: Person): void {
    this.viewDetailPerson.emit(person);
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  setHeight(): void {
    const elements: number[] = [];
    elements.push(this.getElementHeightById('.po-page-header'));
    elements.push(this.getElementHeightById('.po-row po-table-footer-show-more ng-star-inserted'));
    this.height = this.calculateHeight(elements) - 145;
  }

  getElementHeightById(id: string): number {
    const el = document.querySelector(id);
    return el ? el.clientHeight : 0;
  }

  calculateHeight(elements: number[]): number {
    return elements.reduce((amount, currency) => amount - currency, window.innerHeight);
  }
}
