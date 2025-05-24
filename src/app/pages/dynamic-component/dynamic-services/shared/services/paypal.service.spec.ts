import { TestBed } from '@angular/core/testing';
import { PoNotificationService } from '@po-ui/ng-components';

import { PixService } from './pix.service';

describe('PaypalService', () => {
  let service: PixService;
  let poNotification: PoNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixService]
    });

    service = TestBed.inject(PixService);
    poNotification = TestBed.inject(PoNotificationService);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar o método pay e exibir a notificação de sucesso', () => {
    const notificationSpy = jest.spyOn(poNotification, 'success');
    service.pay();
    expect(notificationSpy).toHaveBeenCalledWith('Pagamento efetuado com sucesso | Pix');
  });
});
