import { ChangeDetectionStrategy, Component, ElementRef, input, OnInit, viewChild } from '@angular/core';
import { PoImageModule, PoInfoModule, PoPopoverModule, PoTagModule, PoWidgetModule } from '@po-ui/ng-components';

import { Product } from '../shared/interfaces/product';
import { RatingComponent } from '../../../shared/components/rating/rating.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [PoWidgetModule, PoInfoModule, PoTagModule, RatingComponent, CurrencyPipe, PoImageModule, PoPopoverModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  readonly poImageRef = viewChild.required('poImage', { read: ElementRef });
  product = input.required<Product>();
  height = 250;

  ngOnInit(): void {
    if (this.isSmartPhone()) {
      this.height = 420;
    }
  }

  isSmartPhone(): boolean {
    return window.innerWidth < 481;
  }
}
