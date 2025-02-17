import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Card } from '../card';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

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
  route: ActivatedRoute = inject(ActivatedRoute);
  productsList : Card[] = [];
  productsService: ProductsService = inject(ProductsService);
  

  constructor(){
    this.productsList = this.productsService.getFiltredProducts(this.route.snapshot.params['category']);
  }
  
}
