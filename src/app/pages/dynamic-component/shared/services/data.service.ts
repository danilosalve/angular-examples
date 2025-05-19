import { Injectable, InjectionToken } from '@angular/core';
import { UserLabel } from '../interfaces/user-label';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: UserLabel[] = [
    { value: 1, label: 'Danilo' },
    { value: 2, label: 'Andréia' },
    { value: 3, label: 'Eduardo' },
    { value: 4, label: 'Gustavo' }
  ];

  heroes: UserLabel[] = [
    { value: 1, label: 'Batman', name: 'Bruce Wayne' },
    { value: 2, label: 'Super homem', name: 'Clark Kent' },
    { value: 3, label: 'Doutor Estranho', name: 'Stephen Vincent Strange' },
    { value: 4, label: 'Homem Aranha', name: 'Peter Parker' },
    { value: 5, label: 'Homem de Ferro', name: 'Tony Stark' },
    { value: 6, label: 'Flash', name: 'Barry Allen' }
  ];
}

export const DataServiceToken = new InjectionToken<{ data: { name: string } }>('Data Service Token');
