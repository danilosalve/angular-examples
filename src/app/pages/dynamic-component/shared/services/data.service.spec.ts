import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
  });
  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
    expect(Array.isArray(service.heroes)).toBeTruthy();
    expect(Array.isArray(service.data)).toBeTruthy();
  });
});
