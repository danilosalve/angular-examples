import { AfterViewInit, Component, HostListener, inject, signal } from '@angular/core';
import { PersonsService } from './shared/services/persons.service';
import { PoPageModule, PoTableModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-persons',
  imports: [PoPageModule, PoTableModule],
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements AfterViewInit {
  page = signal(1);
  personsService = inject(PersonsService);
  personsResource = this.personsService.getPersons;
  height = 400;

  ngAfterViewInit(): void {
    this.onResize();
  }

  loadPersons(): void {
    this.page.update(page => page + 1);
    this.personsService.updatePage(this.page());
  }

  restartPersons(): void {
    this.personsResource.reload();
  }

  @HostListener('window:resize')
  onResize(): void {
    setTimeout(() => this.setHeight(), 200);
  }

  setHeight(): void {
    const elements = [];

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
