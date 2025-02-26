import { NamedListPokemon } from './named-list-pokemon';
import { Pokemon } from './pokemon';

export type ListPokemon = NamedListPokemon<List>;

interface List {
  name: string;
  url: string;
}

export type ListOfPokemonWithDetail = NamedListPokemon<Pokemon>;
