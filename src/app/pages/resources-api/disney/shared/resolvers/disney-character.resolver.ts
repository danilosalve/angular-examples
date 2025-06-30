import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { DisneyCharacterApiResponse } from './../interfaces/disney-character-api-response';
import { DisneyService } from '../services/disney.service';

export const disneyCharacterResolver: ResolveFn<DisneyCharacterApiResponse> = route => {
  return inject(DisneyService).getCharacterById(route.paramMap?.get('id') || '0');
};
