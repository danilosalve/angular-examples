import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { of } from 'rxjs';

import { films } from './pages/in-memory/shared/database/films.db';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //Apenas a coleção de filmes será interceptadda
    return of({ films: films });
  }
}
