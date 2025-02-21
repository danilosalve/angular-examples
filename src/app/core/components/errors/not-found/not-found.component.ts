import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PoButtonModule, PoContainerModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-not-found',
  imports: [PoContainerModule, PoButtonModule, NgOptimizedImage],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  private readonly router: Router = inject(Router);

  navigateToHome(): void {
    this.router.navigate(['']);
  }
}
