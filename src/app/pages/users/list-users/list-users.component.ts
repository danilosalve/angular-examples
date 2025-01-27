import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PoContainerModule, PoLoadingModule, PoPageModule, PoSearchModule } from '@po-ui/ng-components';
import { Observable, finalize, ignoreElements, catchError, of } from 'rxjs';

import { UserAPIResponse } from '../shared/interface/user.interface';
import { FilterByDescriptionPipe } from '../shared/pipes/filter-by-description.pipe';
import { UsersService } from '../shared/services/users.service';
import { UserComponent } from '../user/user.component';

@Component({
    selector: 'app-list-users',
    imports: [
        CommonModule,
        PoPageModule,
        PoLoadingModule,
        PoContainerModule,
        FilterByDescriptionPipe,
        UserComponent,
        PoSearchModule
    ],
    templateUrl: './list-users.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUsersComponent {
  protected filter: string = '';
  protected filterType: string = 'All';
  protected isHideLoading: boolean = false;
  protected users$!: Observable<UserAPIResponse>;
  protected usersError$!: Observable<any>;
  private usersService: UsersService = inject(UsersService);
  protected readonly filterSelect = [
    { label: 'Usuário', value: 'id' },
    { label: 'Nome', value: 'displayName' }
  ];

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers().pipe(finalize(() => (this.isHideLoading = true)));

    this.usersError$ = this.users$.pipe(
      ignoreElements(),
      catchError(err => of(err))
    );
  }

  /**
   * @description
   * Lidar com as alterações do filtro de usuários
   *
   * @param $event Evento de alteração do filtro
   */
  changeFilter($event: any): void {
    this.filter = $event.value;
    this.filterType = Array.isArray($event.filter) ? 'All' : $event.filter;
  }
}
