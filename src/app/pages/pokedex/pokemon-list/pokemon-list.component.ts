import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { concatMap, finalize, from, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PoLoadingModule, PoPageModule, PoContainerModule, PoButtonModule } from '@po-ui/ng-components';

import { ListOfPokemonWithDetail } from '../shared/interfaces/list-pokemon';
import { PokemonService } from '../shared/services/pokemon.service';
import { Pokemon } from '../shared/interfaces/pokemon';
import { PokemonResultsComponent } from './pokemon-results/pokemon-results.component';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { ListOfPokemonsCardsComponent } from './list-of-pokemons-cards/list-of-pokemons-cards.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [
    CommonModule,
    PoPageModule,
    PoLoadingModule,
    PoContainerModule,
    PoButtonModule,
    SearchComponent,
    PokemonResultsComponent,
    ListOfPokemonsCardsComponent,
  ],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  private readonly pokemonService = inject(PokemonService);
  private results: Pokemon[] = [];

  protected isHideLoading = false;
  protected offset = 0;
  protected pokemons$!: Observable<ListOfPokemonWithDetail>;
  protected isLoadShowMore = false;

  ngOnInit(): void {
    this.getPokemons(0);
  }

  onShowMore(): void {
    this.isLoadShowMore = true;
    this.offset += 12;
    this.getPokemons(this.offset);
  }

  getPokemons(offset: number): void {
    this.pokemons$ = this.pokemonService.getListPokemonsWithDetail(offset).pipe(
      concatMap(response => {
        const { count, next, previous, results } = response;
        this.results = this.results.concat(results);
        return from(results).pipe(
          map(() => ({
            count,
            next,
            previous,
            results: this.results,
          }))
        );
      }),
      finalize(() => (this.isHideLoading = true))
    );
  }

  onChangeFilter(filter: string): void {
    this.isLoadShowMore = false;
    this.results = [];

    if (filter) {
      this.pokemons$ = this.pokemonService
        .getByNameWithDetail(filter)
        .pipe(finalize(() => (this.isHideLoading = true)));
    } else {
      this.offset = 0;
      this.getPokemons(0);
    }
  }
}
