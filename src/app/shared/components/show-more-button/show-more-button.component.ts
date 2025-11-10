import { PoButtonModule } from '@po-ui/ng-components';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-show-more-button',
  imports: [PoButtonModule],
  templateUrl: './show-more-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowMoreButtonComponent {
  readonly isLoading = input<boolean>(false);
  readonly isDisabled = input<boolean>(false);
  clickShowMore = output();
}
