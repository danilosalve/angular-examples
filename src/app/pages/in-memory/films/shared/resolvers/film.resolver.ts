import { ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, of } from 'rxjs';

import { Film } from '../interface/films';
import { FilmsService } from '../services/films.service';
import { PoNotificationService } from '@po-ui/ng-components';

export const filmResolver: ResolveFn<Film | null> = route => {
  const id = route.paramMap?.get('id') || '0';
  const router = inject(Router);
  const notification = inject(PoNotificationService);
  return inject(FilmsService)
    .getById(id)
    .pipe(
      catchError(err => {
        if (err.status === 404) {
          router.navigate(['/not-found']);
        } else {
          notification.error('Ops parece que a página não está disponivel no momento');
          router.navigate(['/sample/in-memory/films']);
        }
        return of(null);
      })
    );
};
