import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PoContainerModule, PoLoadingModule, PoPageModule, PoSearchModule } from '@po-ui/ng-components';
import { Observable, finalize, ignoreElements, catchError, of } from 'rxjs';

import { UserAPIResponse } from '../shared/interface/user.interface';
import { FilterByDescriptionPipe } from '../shared/pipes/filter-by-description.pipe';
import { UsersService } from '../shared/services/users.service';
import { UserComponent } from '../user/user.component';
import { HttpErrorResponse } from '@angular/common/http';
import { IsDeveloperModeDirective } from '../../../shared/directives/is-developer-mode.directive';

@Component({
  selector: 'app-list-users',
  imports: [
    CommonModule,
    PoPageModule,
    PoLoadingModule,
    PoContainerModule,
    FilterByDescriptionPipe,
    UserComponent,
    PoSearchModule,
    IsDeveloperModeDirective,
  ],
  templateUrl: './list-users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsersComponent implements OnInit {
  protected filter = '';
  protected filterType = 'All';
  protected isHideLoading = false;
  protected users$!: Observable<UserAPIResponse>;
  protected usersError$!: Observable<HttpErrorResponse>;
  private usersService: UsersService = inject(UsersService);
  protected readonly filterSelect = [
    { label: 'Usuário', value: 'id' },
    { label: 'Nome', value: 'displayName' },
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
  changeFilter($event: { filter: string[] | string; value: string }): void {
    this.filter = $event.value;
    this.filterType = Array.isArray($event.filter) ? 'All' : $event.filter;
  }
}
