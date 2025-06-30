import { Routes } from '@angular/router';

export const RESOURCES_API_ROUTES: Routes = [
  {
    path: 'products',
    title: 'Produtos',
    loadChildren: () => import('./product/product.routes').then(r => r.PRODUCT_ROUTES)
  },
  {
    path: 'persons',
    title: 'Rick & Morty | Personagens',
    loadComponent: () => import('./persons/persons.component').then(c => c.PersonsComponent)
  },
  {
    path: 'disney',
    title: 'Disney - Personagens',
    loadChildren: () => import('./disney/disney.routes').then(r => r.DISNEY_ROUTES)
  }
];
