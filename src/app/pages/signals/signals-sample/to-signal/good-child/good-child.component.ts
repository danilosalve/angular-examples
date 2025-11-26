import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { PoInfoModule, PoInfoOrientation } from '@po-ui/ng-components';
import { Climate } from '../shared/interfaces/climate';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-good-child',
  imports: [PoInfoModule],
  providers: [DatePipe],
  templateUrl: './good-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodChildComponent {
  readonly climate = input<Climate | null>(null);
  readonly cityName = computed(() => (this.climate() ? this.climate()?.cidade : 'Carregando...'));
  readonly clima = computed(() => (this.climate() ? this.climate()?.clima : []));
  readonly dateOfUpdate = computed(() => (this.climate() ? this.climate()?.atualizado_em : ''));
  readonly state = computed(() => (this.climate() ? this.climate()?.estado : ''));
  protected readonly infoOrientation = PoInfoOrientation.Horizontal;
  private readonly datePipe = inject(DatePipe);

  transformDate(date?: string): string {
    if (!date) return '';
    return this.datePipe.transform(date, 'dd/MM/yyyy') || date;
  }
}
