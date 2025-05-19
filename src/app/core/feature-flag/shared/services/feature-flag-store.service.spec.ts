import { FeatureFlagStoreService } from './feature-flag-store.service';
import { FeatureFlag } from '../interfaces/feature-flag';

describe('FeatureFlagStoreService', () => {
  let service: FeatureFlagStoreService;
  const mockFlags: FeatureFlag = {
    featureFlags: {
      users: true,
      darkMode: false,
      isAdmin: true
    }
  };

  beforeEach(() => {
    service = new FeatureFlagStoreService();
  });

  it('deve emitir os flags ao chamar setStore', (done) => {
    service.flags$.subscribe(flags => {
      if (flags) {
        expect(flags).toEqual(mockFlags);
        done();
      }
    });
    service.setStore(mockFlags);
  });

  it('deve retornar true se todas as flags existirem e forem true', () => {
    service.setStore(mockFlags);
    expect(service.hasFlags('users')).toBe(true);
    expect(service.hasFlags(['users', 'isAdmin'])).toBe(true);
  });

  it('deve retornar false se alguma flag não existir ou for false', () => {
    service.setStore(mockFlags);
    expect(service.hasFlags('darkMode')).toBe(false);
    expect(service.hasFlags(['users', 'darkMode'])).toBe(false);
    expect(service.hasFlags('notExists')).toBe(false);
  });
});
