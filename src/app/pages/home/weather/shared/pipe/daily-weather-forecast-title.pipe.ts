import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dailyWeatherForecastTitle'
})
export class DailyWeatherForecastTitlePipe implements PipeTransform {
  transform(value: string): string {
    return `Dia ${value}`;
  }

}
