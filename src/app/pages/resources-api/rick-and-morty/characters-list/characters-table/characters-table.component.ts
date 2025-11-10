import { AfterViewInit, Component, input } from '@angular/core';
import { PoTableColumn, PoTableModule } from '@po-ui/ng-components';

import { Character } from '../../shared/interfaces/character-rick-and-morty';
import { BaseTableComponent } from '../../../../../shared/components/base/base-table.component';

@Component({
  selector: 'app-characters-table',
  imports: [PoTableModule],
  templateUrl: './characters-table.component.html'
})
export class CharactersTableComponent extends BaseTableComponent implements AfterViewInit {
  readonly items = input.required<Character[]>();
  readonly isLoading = input<boolean>(false);

  protected readonly columns: PoTableColumn[] = this.getColumns();

  constructor() {
    const elements = ['.po-page-header', '.po-table-actions', '.app-search', '.footer'];
    super(400, elements);
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

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

  private IsColumnVisible(): boolean {
    return window.innerWidth > 480;
  }
}
