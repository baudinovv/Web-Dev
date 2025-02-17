import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <header class="header">
      <div class="header-container container">
        <img src="https://kaspi.kz/img/Logo.svg" alt="Kaspi logo" routerLink="">
      </div>
    </header>
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
