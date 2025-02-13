export interface Person {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: PersonOrigin;
  location: PersonLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface PersonOrigin {
  name: string;
  url: string;
}
export interface PersonLocation {
  name: string;
  url: string;
}
