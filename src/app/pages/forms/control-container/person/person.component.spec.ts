import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersonComponent, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('o formulário deve ser inválido quando vazio', () => {
    component.form = component.onFormBuild();
    expect(component.form.valid).toBeFalsy();
  });

  it('o formulário deve ser válido quando preenchido corretamente', () => {
    component.form = component.onFormBuild();
    component.form.patchValue({
      name: 'John Doe',
      document: '12345678901',
      street: '123 Main St',
      addressNumber: 123,
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      complement: 'Apt 1A',
    });
    expect(component.form.valid).toBeTruthy();
  });
});
