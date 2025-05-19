import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightPokemon'
})
export class WeightPokemonPipe implements PipeTransform {
  transform(value: number): string {
    return `${value / 10} kg`;
  }
}
