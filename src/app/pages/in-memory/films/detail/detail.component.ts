import { Component, inject, OnInit } from '@angular/core';
import {
  PoBreadcrumb,
  PoImageModule,
  PoLoadingModule,
  PoNotificationService,
  PoPageModule,
  PoTagModule
} from '@po-ui/ng-components';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';

import { FilmsService } from './../shared/services/films.service';
import { Film } from '../shared/interface/films';

@Component({
  selector: 'app-detail',
  imports: [PoPageModule, PoImageModule, PoLoadingModule, PoTagModule, DatePipe, CommonModule],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly filmsService = inject(FilmsService);
  private readonly notification = inject(PoNotificationService);
  private readonly router = inject(Router);

  protected readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Filmes', link: '/sample/in-memory/films' },
      { label: 'Detalhes do Filme' }
    ]
  };
  protected film!: Film;
  protected isLoading = false;

  ngOnInit(): void {
    this.loadFilmByRouter();
  }

  loadFilmByRouter(): void {
    this.activatedRoute.data.subscribe(({ film }) => (this.film = film));
  }

  onFilmRemove(): void {
    this.isLoading = true;
    this.filmsService
      .delete(this.film.id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.notification.success('Registro excluído com sucesso');
          this.router.navigate(['/sample/in-memory/films']);
        },
        error: () => this.notification.error('Falha ao excluír Filme')
      });
  }

  onFilmEdit(): void {
    this.isLoading = true;
    this.router.navigate(['/sample/in-memory/films/edit', this.film.id]);
  }
}
