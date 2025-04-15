import { FeatureFlag } from '../interfaces/feature-flag';

/**
 * Constante com valores padrões das Flags
 *
 * @useBy Utilizado caso o servidor esteja fora do ar.
 */
export const DEFAULT_FLAGS: FeatureFlag = {
  featureFlags: {
    users: false,
    darkMode: true,
    isAdmin: true,
  },
};
