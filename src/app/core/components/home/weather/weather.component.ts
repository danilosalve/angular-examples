import { Component, inject, Injector, signal, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PoContainerModule, PoFieldModule, PoWidgetModule } from '@po-ui/ng-components';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { WeatherService } from './shared/services/weather.service';
import { DailyWeatherForecastComponent } from './daily-weather-forecast/daily-weather-forecast.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { ThemeService } from '../../../../shared/components/toolbar/shared/services/theme.service';

@Component({
  selector: 'app-weather',
  imports: [
    PoContainerModule,
    PoFieldModule,
    ReactiveFormsModule,
    DailyWeatherForecastComponent,
    WeatherIconComponent,
    NgxSkeletonLoaderModule,
    PoWidgetModule
  ],
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  readonly city: Signal<string | undefined> = signal(undefined);
  animation: 'progress' | 'progress-dark' | 'pulse' | 'false' | false = 'progress';
  private readonly wheatherService = inject(WeatherService);
  wheatherResource = this.wheatherService.getWeather;
  readonly form = new FormGroup({
    city: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.min(3)]
    })
  });

  private readonly injector = inject(Injector);
  private readonly themeService = inject(ThemeService);

  constructor() {
    this.city = toSignal(this.form.controls.city.valueChanges ?? of(undefined), { injector: this.injector });
    this.form.patchValue({ city: 'São Paulo' });
    this.animation = this.themeService.isThemeDark() ? 'progress-dark' : 'progress';
  }

  onChangeCity(): void {
    if (this.city() && this.form.valid) {
      this.wheatherService.updateCity(this.city()!);
    }
  }
}
