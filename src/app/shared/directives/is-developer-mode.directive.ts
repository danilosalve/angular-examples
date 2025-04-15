import { Directive, inject, input, isDevMode, OnInit } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';

@Directive({
  selector: '[appIsDeveloperMode]',
})
export class IsDeveloperModeDirective implements OnInit {
  readonly resourceName = input.required<string>();
  private readonly notification = inject(PoNotificationService);

  ngOnInit(): void {
    if (!isDevMode()) {
      this.notification.warning(
        `A funcionalidade ${this.resourceName()} está disponível somente em modo de desenvolvimento`
      );
    }
  }
}
