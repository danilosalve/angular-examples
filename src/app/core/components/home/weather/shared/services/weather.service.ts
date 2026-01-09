import { HttpErrorResponse } from '@angular/common/http';
import { Weather } from '../interfaces/weather';
import { Injectable, resource, ResourceRef, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiUrl = 'https://goweather.herokuapp.com/weather';
  private readonly city = signal('São Paulo');

  readonly getWeather: ResourceRef<Weather> = resource({
    params: () => ({ city: this.city() }),
    loader: async ({ params, abortSignal }) => {
      try {
        const response = await (await fetch(`${this.apiUrl}/${params.city}`, { signal: abortSignal })).json();
        return response;
      } catch (err) {
        this.handleError(err);
      }
    }
  });

  updateCity(city: string): void {
    this.city.set(city);
  }

  private handleError(error: unknown): HttpErrorResponse {
    throw error;
  }
}
