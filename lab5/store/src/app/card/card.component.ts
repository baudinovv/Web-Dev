import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card__container">
        <div class="card__top">
          <a class="card__picture" [href]="card.link">
            <img [src]="card.img " alt="#">
          </a>
          <hr>
          <a class="card__title" [href]="card.link">{{ card.title }}</a>
          <div class="card__desc">{{ card.desc }}</div>
        </div>
        <div class="card__bottom">
          <div class="card__bottom-container">
            <div class="card__rating">
              <img src="./assets/rating/1.svg" alt="">
              <div class="card__rating-num">{{ card.rating }}</div>
            </div>
            <div class="card__price">
              {{ card.price }}
            </div>
          </div>
          <div class="">
            <a class="card__share" [href]="'https://t.me/share/url?url=' + card.link">
              Поделиться
            </a>
            <div class="">
              {{ Likes }}
              <button (click)="addLike()" >Like</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './card.component.css'
})
export class CardComponent {
  Likes: number = 0;

  addLike(){
    this.Likes++;
  }

  @Input() card!:Card;
}
