export interface Film {
  id: number;
  name: string;
  duration: string;
  releaseDate: Date;
  genre: string;
  image: string;
}

export interface ListFilms {
  items: Film[];
}
