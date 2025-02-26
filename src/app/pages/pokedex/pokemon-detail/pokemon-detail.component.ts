import { Component, inject, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  PoChartModule,
  PoChartSerie,
  PoChartType,
  PoContainerModule,
  PoImageModule,
  PoInfoModule,
  PoPageModule,
} from '@po-ui/ng-components';

import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';
import { Pokemon } from '../shared/interfaces/pokemon';
import { TypesOfPokemonComponent } from '../shared/components/types-of-pokemon/types-of-pokemon.component';
import { AbilityOfPokemonComponent } from '../shared/components/ability-of-pokemon/ability-of-pokemon.component';
import { HeightPokemonPipe } from '../shared/pipes/height-pokemon.pipe';
import { WeightPokemonPipe } from '../shared/pipes/weight-pokemon.pipe';
import { IdPokemonPipe } from '../shared/pipes/id-pokemon.pipe';
import { DeviceService } from '../../../shared/services/device.service';

@Component({
  selector: 'app-pokemon-detail',
  imports: [
    PoPageModule,
    PoImageModule,
    PoContainerModule,
    PoChartModule,
    PoInfoModule,
    TitleCasePipe,
    TypesOfPokemonComponent,
    AbilityOfPokemonComponent,
    HeightPokemonPipe,
    WeightPokemonPipe,
    IdPokemonPipe,
  ],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent extends BaseDetailComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly device = inject(DeviceService);
  protected pokemon!: Pokemon;
  protected seriesStats: PoChartSerie[] = [
    { label: 'HP', data: [0], type: PoChartType.Column },
    { label: 'Ataque', data: [0], type: PoChartType.Column },
    { label: 'Defesa', data: [0], type: PoChartType.Column },
    { label: 'Ataque Especial', data: [0], type: PoChartType.Column },
    { label: 'Defesa Especial', data: [0], type: PoChartType.Column },
    { label: 'Velocidade', data: [0], type: PoChartType.Column },
  ];
  imgHeight = this.getImageHeight();

  constructor() {
    super('pokedex');
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ pokemon }) => (this.pokemon = pokemon));

    this.seriesStats[0].data = [this.pokemon.stats[0].base_stat];
    this.seriesStats[1].data = [this.pokemon.stats[1].base_stat];
    this.seriesStats[2].data = [this.pokemon.stats[2].base_stat];
    this.seriesStats[3].data = [this.pokemon.stats[3].base_stat];
    this.seriesStats[4].data = [this.pokemon.stats[4].base_stat];
    this.seriesStats[5].data = [this.pokemon.stats[5].base_stat];
  }

  getImageHeight(): number {
    return this.device.isSmartPhone() ? 250 : 500;
  }
}
