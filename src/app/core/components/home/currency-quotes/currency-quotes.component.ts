import {
  PoFieldModule,
  PoInfoModule,
  PoModalComponent,
  PoModalModule,
  PoNotificationService,
  PoWidgetModule
} from '@po-ui/ng-components';
import { Component, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, take } from 'rxjs';

import { CurrencyQuotesService } from './shared/services/currency-quotes.service';
import { CurrencyInfo } from './shared/interfaces/currency-info';
import { CurrencyQuotes } from './shared/interfaces/currency-quotes';

@Component({
  selector: 'app-currency-quotes',
  imports: [PoFieldModule, PoWidgetModule, FormsModule, PoInfoModule, PoModalModule],
  templateUrl: './currency-quotes.component.html'
})
export class CurrencyQuotesComponent {
  readonly infoModal = viewChild.required('infoModal', { read: PoModalComponent });
  private readonly currencyQuotesServices = inject(CurrencyQuotesService);
  private readonly poNotification = inject(PoNotificationService);
  readonly options = this.currencyQuotesServices.getCurrencyOptions();
  readonly currencyIds = signal<string[]>([]);
  currencyInfo: CurrencyInfo[] = [];

  getCurrencyQuotes(): void {
    if ((this.currencyIds()?.length ?? 0) > 0) {
      this.currencyQuotesServices
        .getByCurrencyIds(this.currencyIds()!)
        .pipe(
          map((currencys: CurrencyQuotes) => {
            const infos: CurrencyInfo[] = [];
            Object.keys(currencys).forEach(key => {
              const currency = currencys[key as keyof CurrencyQuotes];
              if (currency) {
                const info: CurrencyInfo = {
                  name: currency.name,
                  ask: currency.ask,
                  bid: currency.bid
                };
                infos.push(info);
              }
            });
            return infos;
          }),
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
