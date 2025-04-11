import { inject } from '@angular/core';

import { FeatureFlagService } from '../services/feature-flag.service';
/**
 * Está função substitui o token APP_INITIALIZER (depreciado)
 */
export const loadFeatureFlagsFn = () => {
  const featureFlagService = inject(FeatureFlagService);
  return featureFlagService.getFlags();
};
