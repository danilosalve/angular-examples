import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoLoadingModule,
  PoPageModule,
  PoSelectComponent,
  PoSelectOption
} from '@po-ui/ng-components';
import { AfterContentInit, Component, inject, signal, viewChild } from '@angular/core';

import { DisneyService } from '../shared/services/disney.service';
import { DisneyCharactersTableComponent } from './disney-characters-table/disney-characters-table.component';
import { DisneyCharactersListComponent } from './disney-characters-list/disney-characters-list.component';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { TypeListButtonComponent } from '../../../../shared/components/type-list-button/type-list-button.component';
import { CharacterDisney } from '../shared/interfaces/character-disney';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  imports: [
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoLoadingModule,
    SearchComponent,
    PoContainerModule,
    TypeListButtonComponent,
    DisneyCharactersListComponent,
    DisneyCharactersTableComponent
  ],
  templateUrl: './characters-list.component.html'
})
export class CharactersListComponent implements AfterContentInit {
  readonly isTableView = signal(true);
  readonly disneyService = inject(DisneyService);
  readonly disneyResource = this.disneyService.getCharacters;
  readonly filter = signal<string>('');
  readonly optionsSize: PoSelectOption[] = [
    {
      label: '12',
      value: 12
    },
    {
      label: '50',
      value: 50
    },
    {
      label: '100',
      value: 100
    }
  ];
  readonly page = signal<number>(1);
  readonly poSelect = viewChild(PoSelectComponent);
  readonly size = signal<number>(12);

  private router = inject(Router);

  ngAfterContentInit(): void {
    this.poSelect()!.modelValue = this.size();
  }

  onChangeSize(limit: number): void {
    this.size.set(limit);
    this.disneyService.updatePagination(1, this.size());
  }

  onShowMore(): void {
    this.page.update(p => p + 1);
    this.disneyService.updatePagination(1, this.size() * this.page());
  }

  onChangeFilter(filter: string): void {
    this.disneyService.setFilter(filter);
  }

  onChangeTypeView(isTableView: boolean): void {
    this.isTableView.set(isTableView);
  }

  onViewDetail(character: CharacterDisney): void {
    this.router.navigate([`sample/resources-api/disney/detail/${character._id}`]);
  }
}
