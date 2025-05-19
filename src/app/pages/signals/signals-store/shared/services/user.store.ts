import { patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from './user.service';
import { debounceTime, distinctUntilChanged, finalize, pipe, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
interface State {
  users: User[];
  isLoading: boolean;
  query: string;
  error: string | null;
}

const initialState: State = {
  users: [],
  isLoading: false,
  query: '',
  error: null as string | null
};

export const UserStore = signalStore(
  withState(initialState),
  withProps(() => ({
    userService: inject(UserService)
  })),
  withComputed(({ users }) => ({
    userCount: computed(() => users().length)
  })),
  withMethods(store => ({
    updateQuery(query: string) {
      patchState(store, { query });
    },
    loadUsers: rxMethod<void>(source$ =>
      source$.pipe(
        switchMap(() =>
          store.userService.getUsers().pipe(
            tap({
              next: users => patchState(store, { users, isLoading: false, error: null }),
              error: () => patchState(store, { error: 'Falha ao carregar usuários', isLoading: false })
            })
          )
        )
      )
    ),
    loadByQuery: rxMethod<string>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(query =>
          store.userService.getUsers(query).pipe(
            tapResponse({
              next: users => patchState(store, { users }),
              error: () => patchState(store, { isLoading: false, error: 'Falha ao carregar usuários' })
            }),
            finalize(() => patchState(store, { isLoading: false }))
          )
        )
      )
    )
  })),
  withHooks({
    onInit({ loadByQuery, query }) {
      loadByQuery(query);
    }
  })
);
