import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { coerceArray } from '@angular/cdk/coercion';

import { FeatureFlag } from '../interfaces/feature-flag';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagStoreService {
  private storeSubject$ = new BehaviorSubject<FeatureFlag | null>(null);
  flags$ = this.storeSubject$.asObservable();

  setStore(featureFlags: FeatureFlag) {
    this.storeSubject$.next(featureFlags);
  }

  hasFlags(flags: string | string[]): boolean {
    const userFlags = this.storeSubject$.getValue()!.featureFlags as Record<string, boolean>;
    return coerceArray(flags).every(current => userFlags[current] === true);
  }
}
