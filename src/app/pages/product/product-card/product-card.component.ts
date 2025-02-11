import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
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
  height = signal<number>(280);
  image = signal(40);
  imageHeight = computed(() => this.height() - this.image());

  ngOnInit(): void {
    if (this.isSmartPhone()) {
      this.height.set(610);
      this.image.set(300);
    }
  }

  isSmartPhone(): boolean {
    return window.innerWidth < 481;
  }
}
