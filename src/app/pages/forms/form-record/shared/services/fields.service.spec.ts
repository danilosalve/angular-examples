import { TestBed } from '@angular/core/testing';

import { FieldsService } from './fields.service';

describe('FieldsService', () => {
  let service: FieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldsService]
    });
    service = TestBed.inject(FieldsService);
  });

  it('deve ser instanciao', () => {
    expect(service).toBeTruthy();
  });

  it('deve obter os metadados dos campos', () => {
    const fields = service.getFields();
    expect(fields.length).toBe(6);
    expect(fields[0].name).toBe('name');
    expect(fields[1].name).toBe('email');
    expect(fields[2].name).toBe('age');
  });

  it('deve obter a lista de campos', () => {
    const optionsFields = service.getOptionsFields();
    expect(optionsFields.length).toBe(6);
    expect(optionsFields[0].value).toBe('name');
    expect(optionsFields[1].value).toBe('email');
    expect(optionsFields[2].value).toBe('age');
  });
});
