import { Injectable } from '@angular/core';

import { PaymentBaseService } from '../../../../../shared/services/payment-base.service';

@Injectable({
  providedIn: 'root'
})
export class PixService extends PaymentBaseService {
  override pay(): void {
    this.poNotification.success('Pagamento efetuado com sucesso | Pix');
  }
}
