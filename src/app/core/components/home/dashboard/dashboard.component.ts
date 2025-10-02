import { Component } from '@angular/core';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';

import { CoinsComponent } from './coins/coins.component';
import { WeatherComponent } from '../weather/weather.component';
import { CurrencyQuotesComponent } from '../currency-quotes/currency-quotes.component';
import { SamplesComponent } from './samples/samples.component';
import { SampleHome } from './samples/shared/interfaces/sample-home';

@Component({
  selector: 'app-dashboard',
  imports: [
    PoPageModule,
    PoContainerModule,
    CoinsComponent,
    WeatherComponent,
    CurrencyQuotesComponent,
    SamplesComponent
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  samples: SampleHome[] = [
    {
      title: 'Carregamento adiado',
      url: 'sample/defer',
      description: 'Exemplos de utilização @defer',
      help: 'https://angular.dev/guide/templates/defer'
    },
    {
      title: 'Componentes dinamicos',
      url: 'sample/dynamic/components',
      description: 'Exemplos de componentes dinamicos',
      help: ''
    },
    {
      title: 'Formulários',
      url: 'sample/forms/container-form',
      description: 'Exemplos de utilização de Formulários',
      help: ''
    },
    {
      title: 'Master-Detail',
      url: 'sample/pokedex',
      description: 'Exemplo de utilização da estrutura master-detail',
      help: ''
    },
    {
      title: 'Resources API',
      url: 'sample/resources-api/products',
      description: 'Exemplos utilizando Angular Resources',
      help: 'https://angular.dev/guide/signals/resource'
    },
    {
      title: 'RxJs',
      url: 'sample/rxjs/replay',
      description: 'Exemplos utilizando RxJs',
      help: 'https://rxjs-dev.firebaseapp.com/'
    },
    {
      title: 'Signals',
      url: 'sample/signals/samples',
      description: 'Encontre exemplos das principais funcionalidades de Signals',
      help: 'https://angular.dev/guide/signals'
    }
  ];
}
