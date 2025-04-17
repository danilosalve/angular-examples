import { FormsModule } from '@angular/forms';
import { Component, computed, effect, inject, isDevMode, resource, signal } from '@angular/core';
import {
  PoContainerModule,
  PoFieldModule,
  PoInfoModule,
  PoLoadingModule,
  PoNotificationService,
} from '@po-ui/ng-components';

import { Address } from '../shared/interface/address.interface';

@Component({
  selector: 'app-effect',
  imports: [FormsModule, PoContainerModule, PoFieldModule, PoInfoModule, PoLoadingModule],
  templateUrl: './effect.component.html',
})
export class EffectComponent {
  private readonly notification = inject(PoNotificationService);
  private readonly apiUrl = isDevMode() ? 'http://viacep.com.br/ws' : 'https://viacep.com.br/ws';
  zipCode = signal<string>('');
  enabled = signal(false);
  currentZipCode = computed(() => (this.zipCode().length === 8 ? this.zipCode() : this.lastZipCode()));
  lastZipCode = signal<string>('');

  addressResource = resource({
    request: this.currentZipCode,
    loader: ({ request: zipCode, abortSignal }): Promise<Address> => {
      return fetch(`${this.apiUrl}/${zipCode || '0'}/json/`, { signal: abortSignal }).then(
        address => address.json() as unknown as Address
      );
      // return Promise.resolve(ADDRESS_DEFAULT)
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
      this.lastZipCode.set(this.zipCode());
      this.notification.information(`Buscando o CEP ${this.zipCode()}...`);
    }
  }
}
