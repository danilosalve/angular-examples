import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idPokemon',
})
export class IdPokemonPipe implements PipeTransform {
  transform(value: number): string {
    const length = 4 - value.toString().length + 1;
    return `Nº ${Array(length).join('0')}${value}`;
  }
}
