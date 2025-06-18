import { inject } from '@angular/core';
import { Router } from '@angular/router';

export abstract class ErrorBaseComponent {
  private readonly router: Router = inject(Router);

  navigateToHome(): void {
    this.router.navigate(['']);
  }
}
