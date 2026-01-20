import { AfterViewInit, Component, input, output } from '@angular/core';
import { PoTableAction, PoTableColumn, PoTableModule } from '@po-ui/ng-components';

import { Film } from './../../shared/interface/films';
import { BaseTableComponent } from '../../../../../shared/components/base/base-table.component';

@Component({
  selector: 'app-table',
  imports: [PoTableModule],
  templateUrl: './table.component.html'
})
export class TableComponent extends BaseTableComponent implements AfterViewInit {
  readonly items = input.required<Film[]>();
  readonly isLoading = input<boolean>(false);
  readonly editAction = output<number>();
  readonly viewAction = output<number>();

  protected readonly columns: PoTableColumn[] = this.getColumns();
  protected readonly actions: PoTableAction[] = [
    {
      label: 'Editar',
      icon: 'an an-pencil-simple',
      action: this.onClickEdit.bind(this)
    },
    {
      label: 'Visualizar',
      icon: 'an an-eye',
      action: this.onClickView.bind(this)
    }
  ];

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
        property: 'duration',
        label: 'Duração',
        sortable: true,
        type: 'string',
        visible: this.isColumnVisible()
      },
      {
        property: 'releaseDate',
        label: 'Data de Lançamento',
        sortable: true,
        type: 'date',
        visible: this.isColumnVisible()
      },
      {
        property: 'genre',
        label: 'Gênero',
        sortable: true,
        type: 'string',
        visible: this.isColumnVisible()
      }
    ];
  }

  private isColumnVisible(): boolean {
    return window.innerWidth > 480;
  }

  private onClickEdit(film: Film): void {
    this.editAction.emit(film.id);
  }

  private onClickView(film: Film): void {
    this.viewAction.emit(film.id);
  }
}
