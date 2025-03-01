import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterModule, HttpClientModule],
  template: `
    <nav class="menu">
      <a routerLink="" class="menu__item">Home</a>
      <a routerLink="about" class="menu__item">About</a>
      <a routerLink="albums" class="menu__item">Albums</a>
    </nav>
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home';
}
