import { ChangeDetectionStrategy, Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-search-box',
  imports: [FormsModule, PoFieldModule],
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent {
  query = model<string>('');
  queryChange = output<string>();
}
