import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
export const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    title: 'Home'
  },
  {
    path: 'category/:category',
    component: ProductsComponent,
    title: 'Category'
  }
];
