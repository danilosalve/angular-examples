import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FeatureFlagStoreService } from '../shared/services/feature-flag-store.service';

export function featureFlagGuard(featureFlags: string | string[]): CanActivateFn {
  return () => {
    const featureFlagStore = inject(FeatureFlagStoreService);
    const router: Router = inject(Router);
    const hasFlags = featureFlagStore.hasFlags(featureFlags);

    return hasFlags || router.createUrlTree(['access-denied']);
  };
}
