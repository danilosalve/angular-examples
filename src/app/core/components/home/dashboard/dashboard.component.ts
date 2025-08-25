import { Component } from '@angular/core';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';

import { CoinsComponent } from './coins/coins.component';
import { WeatherComponent } from '../weather/weather.component';
import { CurrencyQuotesComponent } from '../currency-quotes/currency-quotes.component';

@Component({
  selector: 'app-dashboard',
  imports: [PoPageModule, PoContainerModule, CoinsComponent, WeatherComponent, CurrencyQuotesComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {}
