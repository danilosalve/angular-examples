import { Component, computed, effect, inject, output, signal } from '@angular/core';
import { PoButtonModule } from '@po-ui/ng-components';

import { DeviceService } from './../../services/device.service';

@Component({
  selector: 'app-type-list-button',
  imports: [PoButtonModule],
  templateUrl: './type-list-button.component.html'
})
export class TypeListButtonComponent {
  /** Se tipo de visualização é tabela retorna verdadeiro*/
  readonly changeTypeView = output<boolean>();
  readonly deviceService = inject(DeviceService);
  readonly isTableView = signal(!this.deviceService.isSmartPhone());
  readonly icon = computed(() => (this.isTableView() ? 'an an-list' : 'an an-cards'));
  readonly label = computed(() => (this.isTableView() ? 'Tabela' : 'Lista'));

  constructor() {
    effect(() => this.changeTypeView.emit(this.isTableView()));
  }

  onChangeTypeView(): void {
    this.isTableView.update(value => !value);
  }
}
