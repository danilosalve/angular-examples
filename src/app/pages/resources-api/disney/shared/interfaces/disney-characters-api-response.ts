import { CharacterDisney } from './character-disney';
import { DisneyApiInfo } from './disney-api-info';

export interface DisneyCharactersApiResponse {
  info: DisneyApiInfo;
  data: CharacterDisney[];
}
