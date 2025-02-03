import { Component, inject, Injector } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoPageModule,
  PoRadioGroupOption,
} from '@po-ui/ng-components';

import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';
import { PagSeguroService } from './shared/services/pag-seguro.service';
import { PaypalService } from './shared/services/paypal.service';
import { PixService } from './shared/services/pix.service';
import { PaymentBaseService } from '../../../shared/services/payment-base.service';

type PaymentType = 'paypal' | 'pag-seguro' | 'pix';

@Component({
  selector: 'app-dynamic-services',
  imports: [CommonModule, PoPageModule, PoContainerModule, PoFieldModule, PoButtonModule, ReactiveFormsModule],
  templateUrl: './dynamic-services.component.html',
})
export class DynamicServicesComponent extends BaseDetailComponent {
  readonly injector = inject(Injector);
  readonly form = new FormGroup({
    amount: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    address: new FormControl('', [Validators.required]),
    type: new FormControl<PaymentType>('pix', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  readonly optionsPayment: PoRadioGroupOption[] = [
    {
      label: 'Pag Seguro',
      value: 'pag-seguro',
    },
    {
      label: 'PayPal',
      value: 'paypal',
    },
    {
      label: 'Pix',
      value: 'pix',
    },
  ];

  constructor() {
    super('dynamic/components');
  }

  onSubmit(): void {
    const type: PaymentType = this.form.controls.type.value;
    const paymentService: PaymentBaseService = this.updatePaymentService(type);

    paymentService.pay();
  }

  private updatePaymentService(type: PaymentType): PaymentBaseService {
    switch (type) {
      case 'pag-seguro':
        return this.injector.get(PagSeguroService);
      case 'paypal':
        return this.injector.get(PaypalService);
      case 'pix':
        return this.injector.get(PixService);
      default:
        throw new Error(`Tipo de pagamento desconhecido ${type}`);
    }
  }
}
