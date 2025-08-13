import { inject } from '@angular/core';
import { CanDeactivateFn, NavigationEnd, Router } from '@angular/router';
import { filter, of, take } from 'rxjs';

import { UnsavedChanges } from './../../shared/interfaces/unsaved-changes';

let confirmationShown = false;

export const unsavedChangesGuard: CanDeactivateFn<UnsavedChanges> = component => {
  const router = inject(Router);

  if (component.hasChanges() && !confirmationShown) {
    confirmationShown = confirm('Existem alterações pendentes de confirmação, deseja realmente sair?');

    if (confirmationShown) {
      router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => (confirmationShown = false));

      return of(confirmationShown);
    }
  }

  return of(true);
};
