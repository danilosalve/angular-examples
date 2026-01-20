import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { finalize, take, Observable } from 'rxjs';
import { PoBreadcrumb, PoFieldModule, PoImageModule, PoLoadingModule, PoPageModule } from '@po-ui/ng-components';

import { Film } from '../shared/interface/films';
import { FilmsFormService } from './../shared/services/films-form.service';
import { UnsavedChanges } from '../../../../shared/interfaces/unsaved-changes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [PoLoadingModule, PoPageModule, PoFieldModule, ReactiveFormsModule, PoImageModule, CommonModule],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit, UnsavedChanges {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private isEdit = false;
  private isSubmit = false;
  private readonly filmsFormService = inject(FilmsFormService);
  private film: Film = this.filmsFormService.getNewFilm;

  protected readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Filmes', link: '/sample/in-memory/films' }, { label: 'Novo Filme' }]
  };
  protected form!: FormGroup;
  protected form$!: Observable<FormGroup>;
  protected image = 'assets/img/not-found-image.jpg';
  protected isLoading = false;
  protected maxDate = new Date();
  protected readonly options = this.filmsFormService.genreOptions;
  protected title = 'Novo Filme';

  ngOnInit(): void {
    this.onInitPage();
    this.onInitForm();
  }

  getCurrentAction(): boolean {
    return this.activatedRoute.snapshot.url[0].path === 'edit';
  }

  hasChanges(): boolean {
    return this.form.dirty && !this.isSubmit;
  }

  loadFilmByRouter(): void {
    this.activatedRoute.data.subscribe(({ film }) => (this.film = film));
  }

  onCancel(): void {
    this.router.navigate(['/sample/in-memory/films']);
  }

  onInitForm(): void {
    this.isLoading = !this.isEdit;
    this.form$ = this.filmsFormService.getForm(this.film, this.isEdit);
    this.form$.pipe(finalize(() => (this.isLoading = false))).subscribe(form => (this.form = form));
    this.image = this.film.image;
  }

  onInitPage(): void {
    this.isEdit = this.getCurrentAction();

    if (this.isEdit) {
      this.breadcrumb.items[2].label = 'Editar Filme';
      this.title = 'Editar Filme';
      this.loadFilmByRouter();
    }
  }

  onSubmit(): void {
    const film = this.form.getRawValue();
    this.isLoading = true;
    this.filmsFormService
      .onSubmit(this.isEdit, film)
      .pipe(
        finalize(() => (this.isLoading = false)),
        take(1)
      )
      .subscribe({ next: () => (this.isSubmit = true) });
  }
}
