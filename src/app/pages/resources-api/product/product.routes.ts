import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    title: 'Produtos',
    loadComponent: () => import('./products/products.component').then(c => c.ProductsComponent)
  }
];
