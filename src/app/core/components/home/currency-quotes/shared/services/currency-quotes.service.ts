import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PoMultiselectOption } from '@po-ui/ng-components';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CurrencyQuotes } from '../interfaces/currency-quotes';
import { AWESOMEAPI_APIKEY } from '../helpers/currency.constants';
@Injectable({
  providedIn: 'root'
})
export class CurrencyQuotesService {
  readonly apiUrl = 'https://economia.awesomeapi.com.br/json/last';
  readonly headers = new HttpHeaders({
    'x-api-key': AWESOMEAPI_APIKEY
  });
  private readonly http = inject(HttpClient);

  getByCurrencyIds(currencyIds: string[]): Observable<CurrencyQuotes> {
    return this.http.get<CurrencyQuotes>(`${this.apiUrl}/${currencyIds.join(',')}`);
  }

  getCurrencyOptions(): PoMultiselectOption[] {
    return [
      {
        label: 'Dólar Americano → Real Brasileiro',
        value: 'USD-BRL'
      },
      {
        label: 'Euro → Real Brasileiro',
        value: 'EUR-BRL'
      },
      {
        label: 'Peso (ARS) → Real Brasileiro',
        value: 'ARS-BRL'
      },
      {
        label: 'Libra esterlina → Real Brasileiro',
        value: 'GBP-BRL'
      },
      {
        label: 'Iene Japonês → Real Brasileiro',
        value: 'JPY-BRL'
      },
      {
        label: 'Yuan Chinês → Real Brasileiro',
        value: 'CNY-BRL'
      }
    ];
  }
}
