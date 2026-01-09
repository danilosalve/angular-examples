import { Component, effect, inject, signal } from '@angular/core';
import { PoContainerModule, PoPageModule, PoLoadingModule } from '@po-ui/ng-components';

import { DragonBallService } from '../shared/services/dragon-ball.service';
import { DragonBallCardsComponent } from './dragon-ball-cards/dragon-ball-cards.component';
import { DragonBallTableComponent } from './dragon-ball-table/dragon-ball-table.component';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { ShowMoreButtonComponent } from '../../../../shared/components/show-more-button/show-more-button.component';
import { TypeListButtonComponent } from '../../../../shared/components/type-list-button/type-list-button.component';
import { Character } from '../shared/interfaces/character';

@Component({
  selector: 'app-dragon-ball-list',
  imports: [
    PoContainerModule,
    PoPageModule,
    PoLoadingModule,
    SearchComponent,
    TypeListButtonComponent,
    ShowMoreButtonComponent,
    DragonBallCardsComponent,
    DragonBallTableComponent
  ],
  templateUrl: './dragon-ball-list.component.html'
})
export class DragonBallListComponent {
  private readonly page = signal<number>(1);
  private readonly dragonBallService = inject(DragonBallService);

  protected readonly isTableView = signal(true);
  protected readonly dbzCharactersResource = this.dragonBallService.getCharacters;
  protected readonly allDbzCharacters = signal<Character[]>([]);

  constructor() {
    effect(() => {
      const resource = this.dbzCharactersResource;
      const data = resource.value();

      if (Array.isArray(data)) {
        this.allDbzCharacters.set(data);
      } else {
        if (data) {
          this.allDbzCharacters.update(prev => [...prev, ...data.items]);
        }
      }
    });
  }
  onShowMore(): void {
    this.page.update(p => p + 1);
    this.dragonBallService.setPage(this.page());
  }

  onChangeFilter(name: string): void {
    this.page.set(1);
    this.allDbzCharacters.set([]);
    this.dragonBallService.setName(name);
  }

  onChangeTypeView(isTableView: boolean): void {
    this.isTableView.set(isTableView);
  }
}
