import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PoAvatarModule, PoInfoModule, PoTagModule, PoWidgetModule } from '@po-ui/ng-components';

import { Product } from '../shared/interfaces/product';

@Component({
  selector: 'app-product-card',
  imports: [PoWidgetModule, PoInfoModule, PoTagModule, PoAvatarModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();
}
