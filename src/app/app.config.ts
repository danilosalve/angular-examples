import { provideRouter } from '@angular/router';
import { ApplicationConfig, importProvidersFrom, provideAppInitializer } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTES } from './app.routes';
import { loadFeatureFlagsFn } from './core/feature-flag/shared/helpers/loadFeatureFlags';
import { NgEventBus } from 'ng-event-bus';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom([BrowserAnimationsModule, PoHttpRequestModule, BrowserModule]),
    provideAppInitializer(loadFeatureFlagsFn),
    NgEventBus
  ],
};
