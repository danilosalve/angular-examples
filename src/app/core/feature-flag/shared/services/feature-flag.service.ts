import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

import { FeatureFlag } from '../interfaces/feature-flag';
import { FeatureFlagStoreService } from './feature-flag-store.service';
import { DEFAULT_FLAGS } from '../helpers/feature-flags-default';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  private readonly http = inject(HttpClient);
  private readonly featureFlagStore = inject(FeatureFlagStoreService);
  /* API fake gerada em https://designer.mocky.io/design -> Não é possivel modificar o valor do registro */
  private readonly apiUrl = 'https://dummyjson.com/c/4c3d-6e55-48bb-9d04';

  getFlags(): Observable<FeatureFlag> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    });
    return this.http.get<FeatureFlag>(this.apiUrl, { headers }).pipe(
      catchError(() => of(DEFAULT_FLAGS)),
      tap(featureFlags => this.featureFlagStore.setStore(featureFlags))
    );
  }
}
