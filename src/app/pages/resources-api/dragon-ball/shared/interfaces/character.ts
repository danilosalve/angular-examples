import { LinksApiResponse } from "./links-api-response";
import { MetaApiResponse } from "./meta-api-response";

/**
 * Caracteristas dos personagens do Dragon Ball
 */
export interface Character {
  /* identificador único do personagem */
  id: number;
  /* nome */
  name: string;
  /* ki */
  ki: string;
  /* ki máximo */
  maxKi: string;
  /* raça */
  race: string;
  /* gênero */
  gender: string;
  /* descrição */
  description: string;
  /* URL com imagem do personagem*/
  image: string;
  /* afiliação */
  affiliation: string
  /* data de exclusão */
  deletedAt: null | string
}

export interface ListCharacters {
  /*Lista de Personagens*/
  items: Character[];
  /* Metadados da requisição */
  meta: MetaApiResponse;
  /*Links para navegação para outras paginas de personagens */
  links: LinksApiResponse;
}
