import { AfterViewInit, Component, input, output } from '@angular/core';
import { CharacterDisney } from '../../shared/interfaces/character-disney';
import { PoTableAction, PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { BaseTableComponent } from '../../../../../shared/components/base/base-table.component';

@Component({
  selector: 'app-disney-characters-table',
  imports: [PoTableModule],
  templateUrl: './disney-characters-table.component.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class DisneyCharactersTableComponent extends BaseTableComponent implements AfterViewInit {
  readonly items = input.required<CharacterDisney[]>();
  readonly isLoading = input<boolean>(false);
  readonly viewDetail = output<CharacterDisney>();
  readonly actions: PoTableAction[] = [
    {
      label: 'Remover',
      icon: 'an an-trash',
      disabled: true
    },
    {
      label: 'Detalhes',
      action: this.onViewDetail.bind(this),
      icon: 'an an-arrow-square-in'
    }
  ];
  readonly columns: PoTableColumn[] = [
    {
      property: '_id',
      label: 'Código',
      type: 'number',
      width: '8%',
      sortable: true
    },
    {
      property: 'name',
      label: 'Nome',
      type: 'string',
      sortable: true
    },
    {
      property: 'name',
      label: 'Fandon',
      link: 'sourceUrl',
      type: 'link',
      width: '20%',
      sortable: true
    }
  ];

  constructor() {
    const elements = ['.po-page-header', '.po-table-actions', '.app-search', '.footer'];
    super(400, elements);
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  onViewDetail(character: CharacterDisney): void {
    this.viewDetail.emit(character);
  }
}
