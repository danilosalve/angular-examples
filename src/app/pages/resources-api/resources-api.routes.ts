import { Routes } from '@angular/router';

export const RESOURCES_API_ROUTES: Routes = [
  {
    path: 'products',
    title: 'Produtos',
    loadChildren: () => import('./product/product.routes').then(r => r.PRODUCT_ROUTES)
  },
  {
    path: 'rick-and-morty',
    title: 'Rick & Morty | Personagens',
    loadChildren: () => import('./rick-and-morty/rick-and-morty.routes').then(r => r.RICK_AND_MORTY_ROUTES)
  },
  {
    path: 'disney',
    title: 'Disney | Personagens',
    loadChildren: () => import('./disney/disney.routes').then(r => r.DISNEY_ROUTES)
  },
  {
    path: 'dbz',
    title: 'DBZ | Personagens',
    loadChildren: () => import('./dragon-ball/dragon-ball.routes').then(r => r.DBZ_ROUTES)
  }
];
