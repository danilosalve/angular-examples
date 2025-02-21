/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PoIconModule, PoInfoModule, PoInfoOrientation, PoTooltipModule, PoWidgetModule } from '@po-ui/ng-components';
import { Subject, takeUntil } from 'rxjs';

import { CoinsService } from './shared/services/coins.service';

@Component({
  selector: 'app-coins',
  imports: [CommonModule, PoWidgetModule, PoInfoModule, PoIconModule, PoTooltipModule],
  templateUrl: './coins.component.html',
})
export class CoinsComponent implements OnInit, OnDestroy {
  protected readonly orientation: PoInfoOrientation = PoInfoOrientation.Horizontal;
  stocks = signal<any>(null);
  unsub$ = new Subject();
  coinsService: CoinsService = inject(CoinsService);

  ngOnInit(): void {
    this.coinsService
      .getStockPrices()
      .pipe(takeUntil(this.unsub$))
      .subscribe((stocksInfo: any) => this.stocks.update(preev => ({ ...preev, ...stocksInfo })));
  }

  ngOnDestroy(): void {
    this.unsub$.next(true);
    this.unsub$.complete();
  }
}
