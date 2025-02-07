import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { PoAvatarModule, PoInfoModule, PoTagModule, PoWidgetModule } from '@po-ui/ng-components';

import { Product } from '../shared/interfaces/product';
import { RatingComponent } from '../../../shared/components/rating/rating.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [PoWidgetModule, PoInfoModule, PoTagModule, PoAvatarModule, RatingComponent, CurrencyPipe],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  product = input.required<Product>();
  height = 250;

  ngOnInit(): void {
    if (this.isSmartPhone())  {
      this.height = 420;
    }
  }

  isSmartPhone(): boolean {
    return window.innerWidth < 576;
  }
}
