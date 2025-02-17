import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="category">
      <div [routerLink]="'/category/' + PC" class="category__item">Компьютеры</div>
      <div [routerLink]="'/category/' + PHONES" class="category__item">Телефоны и гаджеты</div>
      <div [routerLink]="'/category/' + FORHOME" class="category__item">Товары для дома</div>
      <div [routerLink]="'/category/' + CLOTHES" class="category__item">Одежда</div>
    </div>
  `,
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  PC : string = "pc";
  PHONES : string = "phones";
  FORHOME : string = "forHome";
  CLOTHES : string = "clothes";


}
