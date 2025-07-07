import { TitleCasePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { PoImageModule, PoWidgetModule } from '@po-ui/ng-components';

import { Pokemon } from '../../shared/interfaces/pokemon';
import { Router } from '@angular/router';
import { TypesOfPokemonComponent } from '../../shared/components/types-of-pokemon/types-of-pokemon.component';
import { IdPokemonPipe } from '../../shared/pipes/id-pokemon.pipe';

@Component({
  selector: 'app-pokemon-card',
  imports: [PoWidgetModule, PoImageModule, TitleCasePipe, TypesOfPokemonComponent, IdPokemonPipe],
  templateUrl: './pokemon-card.component.html'
})
export class PokemonCardComponent {
  readonly pokemon = input.required<Pokemon>();
  private readonly router = inject(Router);

  onClick(): void {
    this.router.navigate([`sample/pokedex/detail/${this.pokemon().id}`]);
  }
}
