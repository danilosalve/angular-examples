import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { FeatureFlagService } from './feature-flag.service';
import { FeatureFlagStoreService } from './feature-flag-store.service';
import { DEFAULT_FLAGS } from '../helpers/feature-flags-default';
import { FeatureFlag } from '../interfaces/feature-flag';
import { provideHttpClient } from '@angular/common/http';

describe('FeatureFlagService', () => {
  let service: FeatureFlagService;
  let httpMock: HttpTestingController;
  let storeMock: { setStore: jest.Mock };

  beforeEach(() => {
    storeMock = { setStore: jest.fn() };
    TestBed.resetTestingModule();

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: FeatureFlagStoreService, useValue: storeMock },
        FeatureFlagService
      ]
    });

    service = TestBed.inject(FeatureFlagService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve buscar as flags e atualizar o store', done => {
    const mockFlags: FeatureFlag = { featureFlags: { users: true, darkMode: false, isAdmin: true } };

    service.getFlags().subscribe(result => {
      expect(result).toEqual(mockFlags);
      expect(storeMock.setStore).toHaveBeenCalledWith(mockFlags);
      done();
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockFlags);
  });

  it('deve retornar DEFAULT_FLAGS em caso de erro e atualizar o store', done => {
    service.getFlags().subscribe(result => {
      expect(result).toEqual(DEFAULT_FLAGS);
      expect(storeMock.setStore).toHaveBeenCalledWith(DEFAULT_FLAGS);
      done();
    });

    const req = httpMock.expectOne(service['apiUrl']);
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
