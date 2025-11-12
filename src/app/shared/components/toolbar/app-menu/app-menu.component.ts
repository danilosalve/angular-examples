import { Component, viewChild } from '@angular/core';
import { PoIconModule, PoPopoverModule, PoTooltipModule, PoButtonModule, PoModalComponent, PoModalModule } from '@po-ui/ng-components';

import { CurrencyQuotesComponent } from '../../../../core/components/home/currency-quotes/currency-quotes.component';
import { CoinsComponent } from '../../../../core/components/home/dashboard/coins/coins.component';
import { WeatherComponent } from '../../../../core/components/home/weather/weather.component';

@Component({
  selector: 'app-app-menu',
  imports: [
    PoButtonModule,
    PoIconModule,
    PoModalModule,
    PoPopoverModule,
    PoTooltipModule,
    CoinsComponent,
    WeatherComponent,
    CurrencyQuotesComponent
  ],
  templateUrl: './app-menu.component.html'
})
export class AppMenuComponent {
  readonly coinsModal = viewChild.required('coins', { read: PoModalComponent });
  readonly currencyModal = viewChild.required('currencyQuotes', { read: PoModalComponent });
  readonly weatherModal = viewChild.required('weather', { read: PoModalComponent });

  readonly apps = [
    {
      icon: 'an an-currency-btc',
      action: this.onClickCoins.bind(this),
      label: 'Valores das cripto moedas',
      tooltip: 'Abrir aplicativo para consultar valor de cripto moedas em tempo real'
    },
    {
      icon: 'an an-coins',
      action: this.onClickCurrency.bind(this),
      label: 'Valores das moedas',
      tooltip: 'Abrir aplicativo para consultar Valores das moedas'
    },
    {
      icon: 'an an-cloud-sun',
      action: this.onClickWealther.bind(this),
      label: 'Previsão do tempo',
      tooltip: 'Abrir aplicatio para consultar previsão do tempo'
    }
  ];


  onClickCoins(): void {
    this.coinsModal().open();
  }

  onClickCurrency(): void {
    this.currencyModal().open()
  }

  onClickWealther(): void {
    this.weatherModal().open();
  }
}
