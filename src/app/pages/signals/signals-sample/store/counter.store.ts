import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

export const CounterStore = signalStore(
  withState({ count: 0 }),
  withComputed(({ count }) => ({
    doubled: computed(() => count() * 2),
    isEven: computed(() => count() % 2 === 0),
    square: computed(() => Math.sqrt(count())),
    pow: computed(() => Math.pow(count(), 2)),
    cube: computed(() => Math.pow(count(), 3))
  })),
  withMethods(store => ({
    increment: () => patchState(store, { count: store.count() + 1 }),
    decrement: () => patchState(store, { count: store.count() - 1 }),
    reset: () => patchState(store, { count: 0 })
  }))
);
