import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoMultiselectOption, PoNotificationService } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';

import { Film } from '../interface/films';
import { FilmsService } from './films.service';
import { NotificationService } from '../../../../../shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsFormService {
  private readonly filmsService = inject(FilmsService);
  private readonly notification = inject(PoNotificationService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly notificationService = inject(NotificationService);

  getForm(film: Film, isEdit: boolean): Observable<FormGroup> {
    if (isEdit) {
      return of(
        this.fb.group({
          id: [film.id],
          name: [film.name, Validators.required],
          duration: [film.duration, Validators.compose([Validators.required, Validators.pattern('[0-9]{2}:[0-9]{2}')])],
          genre: [this.transformGenre(film.genre), Validators.required],
          releaseDate: [this.transformReleaseDate(film.releaseDate)],
          image: [film.image]
        })
      );
    } else {
      return this.getNextId().pipe(
        map(nextId =>
          this.fb.group({
            id: [nextId],
            name: [film.name, Validators.required],
            duration: [
              film.duration,
              Validators.compose([Validators.required, Validators.pattern('[0-9]{2}:[0-9]{2}')])
            ],
            genre: [film.genre, Validators.required],
            releaseDate: [film.releaseDate],
            image: [film.image]
          })
        )
      );
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit(isEdit: boolean, film: Film): Observable<any> {
    film.genre = film.genre ? film.genre.toString() : '';
    film.image = film.image ?? '';

    const request$ = isEdit ? this.filmsService.put(film, film.id) : this.filmsService.create(film);

    return request$.pipe(
      tap({
        next: () => this.onSendSuccessfully(isEdit),
        error: () => this.onSendError(isEdit)
      })
    );
  }

  readonly genreOptions: PoMultiselectOption[] = [
    {
      label: 'Animação',
      value: 'Animação'
    },
    {
      label: 'Ação',
      value: 'Ação'
    },
    {
      label: 'Aventura',
      value: 'Aventura'
    },
    {
      label: 'Crime',
      value: 'Crime'
    },
    {
      label: 'Comédia',
      value: 'Comédia'
    },
    {
      label: 'Comédia romantica',
      value: 'Comédia romantica'
    },
    {
      label: 'Drama',
      value: 'Drama'
    },
    {
      label: 'Fantasia',
      value: 'Fantasia'
    },
    {
      label: 'Ficção científica',
      value: 'Ficção científica'
    },
    {
      label: 'Romance',
      value: 'Romance'
    },
    {
      label: 'Suspense',
      value: 'Suspense'
    },
    {
      label: 'Terror',
      value: 'Terror'
    }
  ];

  readonly getNewFilm: Film = {
    id: 0,
    name: '',
    duration: '',
    genre: '',
    image: 'assets/img/not-found-image.jpg',
    releaseDate: new Date()
  };

  private getNextId(): Observable<number> {
    return this.filmsService.getAllFilms().pipe(
      map(films => {
        if (!films || films.length === 0) {
          return 1; // se não houver registros, começa em 1
        }
        const maxId = Math.max(...films.map(f => f.id));
        return maxId + 1;
      })
    );
  }

  private onSendSuccessfully(isEdit: boolean): void {
    if (!isEdit) {
      this.notificationService.sendNotification('Um novo filme foi adicionado a lista');
    }
    this.notification.success(`Filme ${isEdit ? 'alterado' : 'incluído'} com sucesso!`);
    this.router.navigate(['/sample/in-memory/films']);
  }

  private onSendError(isEdit: boolean): void {
    this.notification.error(
      `Não foi possível salvar a ${isEdit ? 'alteração' : 'inclusão'}. Contate o Administrador do sistema`
    );
  }

  private transformGenre(genre: string | string[]): string[] {
    if (Array.isArray(genre)) return genre;
    return genre.split(',').map(f => f.trim());
  }

  private transformReleaseDate(releaseDate: Date | string): string {
    return new Intl.DateTimeFormat('en-CA').format(new Date(releaseDate));
  }
}
