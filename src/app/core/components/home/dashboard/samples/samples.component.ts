import { PoWidgetModule } from '@po-ui/ng-components';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  imports: [PoWidgetModule]
})
export class SamplesComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly url = input.required<string>();
  readonly help = input.required<string>();

  private readonly router: Router = inject(Router);

  protected accessExample(): void {
    this.router.navigate([this.url()]);
  }
}
