import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

import { FeatureFlag } from '../interfaces/feature-flag';
import { FeatureFlagStoreService } from './feature-flag-store.service';
import { DEFAULT_FLAGS } from '../helpers/feature-flags-default';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  private readonly http = inject(HttpClient);
  private readonly featureFlagStore = inject(FeatureFlagStoreService);
  /* API fake gerada em https://designer.mocky.io/design -> Não é possivel modificar o valor do registro */
  private readonly apiUrl = 'https://run.mocky.io/v3/8bf14630-5c64-4490-91cf-84e54cf204d0';

  getFlags(): Observable<FeatureFlag> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.http
      .get<FeatureFlag>(this.apiUrl, { headers })
      .pipe(
        catchError(() => of(DEFAULT_FLAGS)),
        tap(featureFlags => this.featureFlagStore.setStore(featureFlags)));
  }
}

