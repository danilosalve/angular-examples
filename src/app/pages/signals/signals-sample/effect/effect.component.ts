import { FormsModule } from '@angular/forms';
import { Component, effect, inject, resource, signal } from '@angular/core';
import {
  PoContainerModule,
  PoFieldModule,
  PoInfoModule,
  PoLoadingModule,
  PoNotificationService,
} from '@po-ui/ng-components';

import { Address } from '../shared/interface/address.interface';
import { ADDRESS_DEFAULT } from '../shared/helpers/address-default.constrants';

@Component({
  selector: 'app-effect',
  imports: [FormsModule, PoContainerModule, PoFieldModule, PoInfoModule, PoLoadingModule],
  templateUrl: './effect.component.html',
})
export class EffectComponent {
  private readonly notification = inject(PoNotificationService);
  zipCode = signal<string>('');
  enabled = signal(false);

  addressResource = resource({
    request: () => ({ zipCode: this.zipCode(), enable: this.enabled() }),
    loader: ({ request: zipCode, abortSignal }): Promise<Address> => {
      if (this.enabled()) {
        return fetch(`http://viacep.com.br/ws/${zipCode}/json/`, { signal: abortSignal }).then(
          address => address.json() as unknown as Address
        );
      } else {
        return Promise.resolve(ADDRESS_DEFAULT);
      }
    },
  });

  constructor() {
    effect(() => {
      this.enableRequest(this.zipCode());
    });
  }

  enableRequest(zipCode: string): void {
    const isEnable = zipCode.length === 8;
    this.enabled.set(isEnable);

    if (isEnable) {
      this.notification.information(`Buscando o CEP ${this.zipCode()}...`);
    }
  }
}
