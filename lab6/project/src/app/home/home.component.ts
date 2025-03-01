import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <h1> This is home component. </h1>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
