import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoAccordionModule, PoContainerModule, PoImageModule, PoInfoModule, PoPageModule } from '@po-ui/ng-components';

import { BaseDetailComponent } from '../../../../shared/components/base/base-detail.component';
import { CharacterDisney } from '../shared/interfaces/character-disney';
import { DisneyCharacteristicComponent } from './disney-characteristic/disney-characteristic.component';

@Component({
  selector: 'app-characters-view',
  imports: [
    PoPageModule,
    TitleCasePipe,
    PoContainerModule,
    PoImageModule,
    PoInfoModule,
    DisneyCharacteristicComponent,
    PoAccordionModule
  ],
  templateUrl: './characters-view.component.html'
})
export class CharactersViewComponent extends BaseDetailComponent implements OnInit {
  protected item!: CharacterDisney;
  protected readonly imgHeight = 250;

  private readonly activatedRoute = inject(ActivatedRoute);

  constructor() {
    super('resources-api/disney');
  }

  ngOnInit(): void {
    this.getCharacterByRouter();
  }

  getCharacterByRouter(): void {
    this.activatedRoute.data.subscribe(({ character }) => (this.item = character.data));
  }
}
