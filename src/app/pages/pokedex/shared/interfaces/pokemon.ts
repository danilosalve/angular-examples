export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: PokemonFormType[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries[];
  species: Species;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

interface PokemonTypePast {
  name: string;
  generation: NamedAPIResource;
  types: PokemonType[];
}

interface PokemonMove {
  move: Move;
  version_group_details: unknown;
}

interface PokemonStat {
  stat: Stat;
  effort: number;
  base_stat: number;
}

interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other: {
    'official-artwork': {
      front_default: string;
      back_default: string;
    };
  };
}

interface PokemonCries {
  latest: string;
  legacy: string;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: unknown;
}

type Move = BaseExtends;
type Stat = BaseExtends;
type PokemonType = BaseExtends;
type PokemonFormType = BaseExtends;
type Species = NamedAPIResource;

interface BaseExtends {
  slot: number;
  type: NamedAPIResource;
}

interface NamedAPIResource {
  name: string;
  url: string;
}
