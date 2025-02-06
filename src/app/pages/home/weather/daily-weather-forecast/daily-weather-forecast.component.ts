import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PoWidgetModule } from '@po-ui/ng-components';
import { WeatherForecast } from '../shared/interfaces/weather';
import { DailyWeatherForecastTitlePipe } from '../shared/pipe/daily-weather-forecast-title.pipe';

@Component({
  selector: 'app-daily-weather-forecast',
  imports: [PoWidgetModule, DailyWeatherForecastTitlePipe],
  templateUrl: './daily-weather-forecast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyWeatherForecastComponent {
  weather = input.required<WeatherForecast>();
}
