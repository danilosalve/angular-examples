import { inject, Injectable } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export abstract class PaymentBaseService {
  protected readonly poNotification: PoNotificationService = inject(PoNotificationService);
  abstract pay(): void;
}
