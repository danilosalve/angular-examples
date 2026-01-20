import { CommonModule, DatePipe } from '@angular/common';
import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { PoWidgetModule, PoImageModule, PoTagModule } from '@po-ui/ng-components';

import { Film } from '../../../shared/interface/films';
import { DeviceService } from '../../../../../../shared/services/device.service';

@Component({
  selector: 'app-card',
  imports: [PoImageModule, PoTagModule, PoWidgetModule, DatePipe, CommonModule],
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  readonly item = input.required<Film>();
  readonly editAction = output<number>();
  readonly viewAction = output<number>();
  protected readonly genres = computed(() => this.item().genre.split(','));
  protected readonly height = signal<number>(300);

  private readonly device = inject(DeviceService);

  ngOnInit(): void {
    if (this.device.isSmartPhone()) {
      this.height.set(550);
    }
  }

  onClickEdit(): void {
    this.editAction.emit(this.item().id);
  }

  onClickView(): void {
    this.viewAction.emit(this.item().id);
  }
}
