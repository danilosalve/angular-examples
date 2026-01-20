import { Component, inject, OnInit, signal } from '@angular/core';
import { PoContainerModule, PoPageAction, PoPageModule } from '@po-ui/ng-components';
import { finalize } from 'rxjs';

import { SearchComponent } from '../../../../shared/components/search/search.component';
import { ShowMoreButtonComponent } from '../../../../shared/components/show-more-button/show-more-button.component';
import { TypeListButtonComponent } from '../../../../shared/components/type-list-button/type-list-button.component';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { FilmsService } from './../shared/services/films.service';
import { Film } from '../shared/interface/films';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [
    PoContainerModule,
    PoPageModule,
    SearchComponent,
    TypeListButtonComponent,
    ShowMoreButtonComponent,
    TableComponent,
    CardsComponent
  ],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  private readonly filmsService = inject(FilmsService);
  private readonly router = inject(Router);

  protected readonly actions: PoPageAction[] = [
    {
      label: 'Novo',
      action: () => this.router.navigate(['sample/in-memory/films/new/'])
    }
  ];
  protected isLoading = false;
  protected readonly isTableView = signal(true);
  protected items: Film[] = [];

  ngOnInit(): void {
    this.getAllFilms();
  }

  onShowMore(): void {
    /* empty */
  }

  onChangeFilter(name: string): void {
    this.isLoading = true;
    this.filmsService
      .getByName(name)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({ next: res => (this.items = res) });
  }

  onChangeTypeView(isTableView: boolean): void {
    this.isTableView.set(isTableView);
  }

  getAllFilms(): void {
    this.isLoading = true;
    this.filmsService
      .getAllFilms()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({ next: res => (this.items = res) });
  }

  onFilmEdit(id: number): void {
    this.isLoading = true;
    this.router.navigate(['sample/in-memory/films/edit/', id]);
  }

  onFilmView(id: number): void {
    this.isLoading = true;
    this.router.navigate(['sample/in-memory/films/detail/', id]);
  }
}
