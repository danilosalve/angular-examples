import { CharacterService } from './../shared/service/character.service';
import { Component, inject, signal } from '@angular/core';
import { PoContainerModule, PoLoadingModule, PoPageModule } from '@po-ui/ng-components';

import { CharactersTableComponent } from './characters-table/characters-table.component';
import { CharactersCardComponent } from './characters-card/characters-card.component';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { TypeListButtonComponent } from '../../../../shared/components/type-list-button/type-list-button.component';
import { ShowMoreButtonComponent } from '../../../../shared/components/show-more-button/show-more-button.component';

@Component({
  selector: 'app-characters-list',
  imports: [
    PoContainerModule,
    PoPageModule,
    PoLoadingModule,
    SearchComponent,
    TypeListButtonComponent,
    CharactersCardComponent,
    CharactersTableComponent,
    ShowMoreButtonComponent
  ],
  templateUrl: './characters-list.component.html'
})
export class CharactersListComponent {
  readonly isTableView = signal(true);
  readonly filter = signal<string>('');
  readonly page = signal<number>(1);
  readonly size = signal<number>(12);

  private readonly characterService: CharacterService = inject(CharacterService);
  readonly charactersResource = this.characterService.getCharacters;

  onShowMore(): void {
    this.page.update(p => p + 1);
    this.characterService.updatePage(this.page());
  }

  onChangeFilter(filter: string): void {
    this.characterService.setFilter(filter);
  }

  onChangeTypeView(isTableView: boolean): void {
    this.isTableView.set(isTableView);
  }
}
