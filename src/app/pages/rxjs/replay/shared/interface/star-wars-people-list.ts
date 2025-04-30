import { StarWarsPeople } from './star-wars-people';

export interface StarWarsPeopleList {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsPeople[];
}
