import { TestBed } from '@angular/core/testing';
import { PoNotificationService } from '@po-ui/ng-components';

import { PagSeguroService } from './pag-seguro.service';

describe('PagSeguroService', () => {
  let service: PagSeguroService;
  let poNotification: PoNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagSeguroService]
    });

    service = TestBed.inject(PagSeguroService);
    poNotification = TestBed.inject(PoNotificationService);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar o método pay e exibir a notificação de sucesso', () => {
    const notificationSpy = jest.spyOn(poNotification, 'success');
    service.pay();
    expect(notificationSpy).toHaveBeenCalledWith('Pagamento efetuado com sucesso | Pagseguro');
  });
});
