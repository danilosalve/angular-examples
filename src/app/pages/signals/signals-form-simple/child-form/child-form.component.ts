import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-child-form',
  imports: [PoFieldModule, FormsModule],
  templateUrl: './child-form.component.html'
})
export class ChildFormComponent {
  firstName = model.required<string>();
  lastName = model.required<string>();
  age = model.required<number>();
}
