import { Component, computed, input } from '@angular/core';

const WEATHER_ICON = {
  sunny: 'an an-sun',
  clear: 'an an-sun',
  cloudy: 'an an-cloud',
  'partly cloudy': 'an an-cloud-sun',
  rain: 'an an-cloud-rain',
  snow: 'an an-snowflake',
};

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
})
export class WeatherIconComponent {
  description = input.required<string>();
  icon = computed(() => this.transformDescriptionIntoIcon(this.description()));

  transformDescriptionIntoIcon(description: string): string {
    description = description.toLocaleLowerCase();
    return WEATHER_ICON[description as keyof typeof WEATHER_ICON] || '';
  }
}
