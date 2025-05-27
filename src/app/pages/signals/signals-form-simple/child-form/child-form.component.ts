import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-child-form',
  imports: [PoFieldModule, FormsModule],
  templateUrl: './child-form.component.html'
})
export class ChildFormComponent {
  readonly firstName = model.required<string>();
  readonly lastName = model.required<string>();
  readonly age = model.required<number>();
}
