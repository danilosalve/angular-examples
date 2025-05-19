import { Injectable, resource, ResourceRef, signal } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';
  private readonly page = signal(1);
  private persons: Person[] = [];

  readonly getPersons: ResourceRef<Person[]> = resource({
    request: this.page,
    loader: async ({ request: page, abortSignal }) => {
      try {
        let response = await (await fetch(`${this.apiUrl}/?page=${page}`, { signal: abortSignal })).json();

        if (this.persons.length > 0) {
          this.persons = this.persons.concat(response.results);
        } else {
          this.persons = response.results;
        }

        response = this.persons;

        return response;
      } catch (err) {
        this.handleError(err);
      }
    }
  });

  getColumns(): PoTableColumn[] {
    return [
      {
        property: 'id',
        label: 'Id',
        sortable: true,
        type: 'number'
      },
      {
        property: 'name',
        label: 'Nome',
        sortable: true,
        type: 'string'
      },
      {
        property: 'status',
        label: 'Status',
        sortable: true,
        type: 'label',
        visible: this.IsColumnVisible(),
        labels: [
          {
            value: 'Alive',
            color: 'color-10',
            label: 'Vivo'
          },
          {
            value: 'Dead',
            color: 'color-02',
            label: 'Morto'
          },
          {
            value: 'unknown',
            color: 'color-07',
            label: 'Desconhecido'
          }
        ]
      },
      {
        property: 'species',
        label: 'Espécie',
        sortable: true,
        type: 'string',
        visible: this.IsColumnVisible()
      },
      {
        property: 'gender',
        label: 'Gênero',
        sortable: true,
        type: 'label',
        visible: this.IsColumnVisible(),
        labels: [
          {
            value: 'Female',
            color: 'color-06',
            label: 'Feminino'
          },
          {
            value: 'Male',
            color: 'color-02',
            label: 'Masculino'
          },
          {
            value: 'Genderless',
            color: 'color-08',
            label: 'Sem gênero'
          },
          {
            value: 'unknown',
            color: 'color-07',
            label: 'Desconhecido'
          }
        ]
      },
      {
        property: 'location.name',
        label: 'Localização',
        sortable: true,
        type: 'string',
        visible: this.IsColumnVisible()
      },
      {
        property: 'type',
        label: 'Tipo',
        sortable: true,
        type: 'string',
        visible: false
      }
    ];
  }

  updatePage(page: number): void {
    this.page.set(page);
  }

  private handleError(error: unknown) {
    throw error;
  }

  private IsColumnVisible(): boolean {
    return window.innerWidth > 480;
  }
}
