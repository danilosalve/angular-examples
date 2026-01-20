import { filmResolver } from './shared/resolvers/film.resolver';
import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../../core/guards/unsaved-changes.guard';

export const FILMS: Routes = [
  {
    path: '',
    title: 'Lista de Filmes',
    loadComponent: () => import('./list/list.component').then(c => c.ListComponent)
  },
  {
    path: 'detail/:id',
    title: 'Detalhes do filme',
    resolve: { film: filmResolver },
    loadComponent: () => import('./detail/detail.component').then(c => c.DetailComponent)
  },
  {
    path: 'new',
    title: 'Novo filme',
    loadComponent: () => import('./form/form.component').then(c => c.FormComponent),
    canDeactivate: [unsavedChangesGuard]
  },
  {
    path: 'edit/:id',
    title: 'Editar filme',
    resolve: { film: filmResolver },
    loadComponent: () => import('./form/form.component').then(c => c.FormComponent),
    canDeactivate: [unsavedChangesGuard]
  }
];
