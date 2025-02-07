import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PoAvatarModule, PoInfoModule, PoTagModule, PoWidgetModule } from '@po-ui/ng-components';

import { Product } from '../shared/interfaces/product';
import { RatingComponent } from '../../../shared/components/rating/rating.component';

@Component({
  selector: 'app-product-card',
  imports: [PoWidgetModule, PoInfoModule, PoTagModule, PoAvatarModule, RatingComponent],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();
}
