import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightPokemon'
})
export class HeightPokemonPipe implements PipeTransform {
  transform(value: number): string {
    return `${(value / 10).toString()} m`;
  }
}
