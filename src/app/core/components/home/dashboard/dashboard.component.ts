import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';

import { CoinsComponent } from './coins/coins.component';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, PoPageModule, PoContainerModule, CoinsComponent, WeatherComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
