import { inject } from '@angular/core';
import { Router } from '@angular/router';

export abstract class BaseDetailComponent {
  backTo: string;
  private readonly router: Router = inject(Router);

  constructor(backTo: string) {
    this.backTo = backTo;
  }

  onBack(): void {
    this.router.navigate([this.backTo]);
  }
}
