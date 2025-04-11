import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PoContainerModule, PoButtonModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-access-denied',
  imports: [PoContainerModule, PoButtonModule, NgOptimizedImage, PoPageModule],
  templateUrl: './access-denied.component.html',
})
export class AccessDeniedComponent {
  private readonly router: Router = inject(Router);

  navigateToHome(): void {
    this.router.navigate(['']);
  }
}
