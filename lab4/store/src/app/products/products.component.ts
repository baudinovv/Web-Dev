import { Component, inject, Injectable } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Card } from '../card';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CardComponent],
  template: `
    <div class="products">
      <app-card 
        *ngFor="let Card of productsList" [card]="Card"
      />
    </div>  
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsList : Card[] = [];
  productsService: ProductsService = inject(ProductsService);
  

  constructor(){
    this.productsList = this.productsService.getProducts();
  }
  
}
