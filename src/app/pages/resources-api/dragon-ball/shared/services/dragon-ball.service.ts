import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  private readonly apiUrl = 'https://dragonball-api.com/api/characters';
}
