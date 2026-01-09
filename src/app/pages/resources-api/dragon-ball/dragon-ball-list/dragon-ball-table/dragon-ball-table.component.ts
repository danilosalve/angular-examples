import { AfterViewInit, Component, input } from '@angular/core';
import { Character } from '../../shared/interfaces/character';
import { PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { BaseTableComponent } from '../../../../../shared/components/base/base-table.component';

@Component({
  selector: 'app-dragon-ball-table',
  imports: [PoTableModule],
  templateUrl: './dragon-ball-table.component.html'
})
export class DragonBallTableComponent extends BaseTableComponent implements AfterViewInit {
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
        property: 'race',
        label: 'Raça',
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
        property: 'ki',
        label: 'KI',
        sortable: true,
        type: 'string',
        visible: this.IsColumnVisible()
      },
      {
        property: 'maxKi',
        label: 'KI Máximo',
        sortable: true,
        type: 'string',
        visible: this.IsColumnVisible()
      },
      {
        property: 'affiliation',
        label: 'Afiliação',
        sortable: true,
        type: 'string',
        visible: this.IsColumnVisible()
      }
    ];
  }

  private IsColumnVisible(): boolean {
    return window.innerWidth > 480;
  }
}
