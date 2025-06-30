import { CharacterDisney } from './character-disney';
import { DisneyApiInfo } from './disney-api-info';

export interface DisneyCharacterApiResponse {
  info: DisneyApiInfo;
  data: CharacterDisney;
}
