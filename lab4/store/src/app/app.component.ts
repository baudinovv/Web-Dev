import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  template: `
    <header class="header">
      <div class="header-container container">
        <img src="https://kaspi.kz/img/Logo.svg" alt="">
      </div>
    </header>
    <main>
      <app-products />
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
