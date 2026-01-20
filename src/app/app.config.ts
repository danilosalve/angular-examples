import { provideRouter } from '@angular/router';
import { ApplicationConfig, importProvidersFrom, provideAppInitializer } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { BrowserModule } from '@angular/platform-browser';
import { NgEventBus } from 'ng-event-bus';

import { APP_ROUTES } from './app.routes';
import { loadFeatureFlagsFn } from './core/feature-flag/shared/helpers/loadFeatureFlags';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom([
      BrowserAnimationsModule,
      PoHttpRequestModule,
      BrowserModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService, {
        delay: 2000,
        dataEncapsulation: false,
        passThruUnknownUrl: true // permite que URLs não definidas sigam para o backend real
      })
    ]),
    provideAppInitializer(loadFeatureFlagsFn),
    NgEventBus
  ]
};
