import { CurrencyInfo } from '../interfaces/currency-info';
import { CurrencyQuotes } from '../interfaces/currency-quotes';
import { CurrencyFormatter } from './currency-formatter';

export class CurrencyInfoMapper {
  constructor(private formatter: CurrencyFormatter) {}

  mapFromQuotes(currencys: CurrencyQuotes): CurrencyInfo[] {
    const infos: CurrencyInfo[] = [];
    Object.keys(currencys).forEach(key => {
      const currency = currencys[key as keyof CurrencyQuotes];
      if (currency) {
        const info: CurrencyInfo = {
          name: currency.name,
          ask: this.formatter.format(currency.ask),
          bid: this.formatter.format(currency.bid)
        };
        infos.push(info);
      }
    });
    return infos;
  }
}
