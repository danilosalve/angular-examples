import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { FeatureFlag } from '../interfaces/feature-flag';
import { FeatureFlagStoreService } from './feature-flag-store.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  private readonly http = inject(HttpClient);
  private readonly featureFlagStore = inject(FeatureFlagStoreService);
  /* API fake gerada em https://designer.mocky.io/design -> Não é possivel modificar o valor do registro */
  private readonly apiUrl = 'https://run.mocky.io/v3/76d1912a-9b9b-4fd0-8db8-e5091382f6f6';

  getFlags(): Observable<FeatureFlag> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.http
      .get<FeatureFlag>(this.apiUrl, { headers })
      .pipe(tap(featureFlags => this.featureFlagStore.setStore(featureFlags)));
  }
}
