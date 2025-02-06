import { Component, inject, Injector, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PoContainerModule, PoFieldModule, PoLoadingModule } from '@po-ui/ng-components';
import { WeatherService } from './shared/services/weather.service';

import { DailyWeatherForecastComponent } from './daily-weather-forecast/daily-weather-forecast.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-weather',
  imports: [
    PoContainerModule,
    PoFieldModule,
    PoLoadingModule,
    ReactiveFormsModule,
    DailyWeatherForecastComponent,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  city: Signal<string | undefined>;
  wheatherService = inject(WeatherService);
  wheatherResource = this.wheatherService.getWeather;
  readonly form = new FormGroup({
    city: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.min(3)],
    }),
  });

  private readonly injector = inject(Injector);

  constructor() {
    this.city = toSignal(this.form.controls.city.valueChanges ?? of(undefined), { injector: this.injector });
    this.form.patchValue({ city: 'São Paulo' });
  }

  onChangeCity(): void {
    if (this.city()) {
      this.wheatherService.updateCity(this.city()!);
    }
  }
}
