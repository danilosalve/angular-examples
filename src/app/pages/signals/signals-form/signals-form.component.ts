import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, Injector, Signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';

@Component({
  selector: 'app-signals-form',
  imports: [CommonModule, PoPageModule, PoFieldModule, PoContainerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signals-form.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class SignalsFormComponent extends BaseDetailComponent {
  form!: FormGroup;
  // Campos Signals do formulário
  buildingName!: Signal<string> | undefined;
  buildingNumber!: Signal<string> | undefined;
  streetAddress!: Signal<string> | undefined;
  city!: Signal<string> | undefined;
  state!: Signal<string> | undefined;
  country!: Signal<string> | undefined;
  postalCode!: Signal<string> | undefined;

  exampleData = {
    name: 'Danilo Salve',
    buildingName: 'Residencia Souza Salve',
    buildingNumber: '129',
    streetAddress: 'Rua Baltazar Pereira',
    city: 'São Paulo',
    state: 'São Paulo',
    country: 'Brasil',
    postalCode: '05175340'
  };

  getterCallCount = 0;
  signalCallCount = 0;

  private injector = inject(Injector);

  constructor(private fb: FormBuilder) {
    super('signals/samples');

    this.form = this.fb.group({
      name: '',
      buildingName: [''],
      buildingNumber: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      country: [''],
      postalCode: ['']
    });
    // Initialize Signals after form creation with ?? and Injector
    this.buildingName = toSignal(this.form.controls['buildingName'].valueChanges ?? of(undefined), {
      injector: this.injector
    });
    this.buildingNumber = toSignal(this.form.controls['buildingNumber'].valueChanges ?? of(undefined), {
      injector: this.injector
    });
    this.streetAddress = toSignal(this.form.controls['streetAddress'].valueChanges ?? of(undefined), {
      injector: this.injector
    });
    this.city = toSignal(this.form.controls['city'].valueChanges ?? of(undefined), { injector: this.injector });
    this.state = toSignal(this.form.controls['state'].valueChanges ?? of(undefined), { injector: this.injector });
    this.country = toSignal(this.form.controls['country'].valueChanges ?? of(undefined), { injector: this.injector });
    this.postalCode = toSignal(this.form.controls['postalCode'].valueChanges ?? of(undefined), {
      injector: this.injector
    });

    this.form.patchValue(this.exampleData);
  }

  // Getter approach
  get fullAddressGetter(): string {
    this.getterCallCount++;
    return [
      this.form.value.buildingName,
      this.form.value.buildingNumber,
      this.form.value.streetAddress,
      this.form.value.city,
      this.form.value.state,
      this.form.value.country,
      this.form.value.postalCode
    ]
      .filter(Boolean)
      .join(', ');
  }
  // Computed Signal approach
  fullAddressSignal = computed(() => {
    this.signalCallCount++;
    return [
      this.buildingName?.(),
      this.buildingNumber?.(),
      this.streetAddress?.(),
      this.city?.(),
      this.state?.(),
      this.country?.(),
      this.postalCode?.()
    ]
      .filter(Boolean)
      .join(', ');
  });
}
