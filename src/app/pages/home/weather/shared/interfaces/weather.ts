export interface Weather extends BaseWeather {
  description: string;
  forecast: WeatherForecast[];
}

export interface WeatherForecast extends BaseWeather {
  day: string;
}

export interface BaseWeather {
  temperature: string;
  wind: string;
}
