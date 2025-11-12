import {
  PoFieldModule,
  PoInfoModule,
  PoModalComponent,
  PoModalModule,
  PoNotificationService,
  PoTooltipModule,
  PoWidgetModule
} from '@po-ui/ng-components';
import { ChangeDetectionStrategy, Component, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, take } from 'rxjs';

import { CurrencyQuotesService } from './shared/services/currency-quotes.service';
import { CurrencyInfo } from './shared/interfaces/currency-info';
import { CurrencyQuotes } from './shared/interfaces/currency-quotes';
import { CurrencyInfoMapper } from './shared/helpers/currency-info-mapper';
import { CurrencyFormatter } from './shared/helpers/currency-formatter';
@Component({
  selector: 'app-currency-quotes',
  imports: [PoFieldModule, PoWidgetModule, FormsModule, PoInfoModule, PoModalModule, PoTooltipModule],
  templateUrl: './currency-quotes.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CurrencyQuotesComponent {
  readonly infoModal = viewChild.required('infoModal', { read: PoModalComponent });
  private readonly currencyQuotesServices = inject(CurrencyQuotesService);
  private readonly poNotification = inject(PoNotificationService);
  readonly options = this.currencyQuotesServices.getCurrencyOptions();
  readonly currencyIds = signal<string[]>([]);
  currencyInfo: CurrencyInfo[] = [];
  private readonly currencyInfoMapper = new CurrencyInfoMapper(new CurrencyFormatter());

  getCurrencyQuotes(): void {
    if ((this.currencyIds()?.length ?? 0) > 0) {
      this.currencyQuotesServices
        .getByCurrencyIds(this.currencyIds()!)
        .pipe(
          map((currencys: CurrencyQuotes) => this.currencyInfoMapper.mapFromQuotes(currencys)),
          take(1)
        )
        .subscribe({
          next: (infos: CurrencyInfo[]) => {
            this.currencyInfo = infos;
            this.infoModal().open();
          },
          error: () => this.poNotification.error('Não foi possível obter as cotações')
        });
    } else {
      this.poNotification.error('Selecione uma ou mais Moedas para obter as cotações');
    }
  }
}
