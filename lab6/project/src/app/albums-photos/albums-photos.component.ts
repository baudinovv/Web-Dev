import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photos } from '../photos';

@Component({
  selector: 'app-albums-photos',
  imports: [CommonModule],
  template: `
    <div class="photos container">
      <div class="photo__card" *ngFor="let item of photos">
        <div class="photo__img">
          <img [src]="'https://dummyimage.com/' + item.thumbnailUrl.slice(28)" alt="">
        </div>
        <div class="photo__title">{{ item.title }}</div>
      </div>
    </div>
  `,
  styleUrl: './albums-photos.component.css'
})
export class AlbumsPhotosComponent implements OnInit {

  photos: Photos[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.albumService.getPhoto(this.route.snapshot.params['id']).subscribe(
      (photos) => {
        this.photos = photos;
      }, (error) => console.log(error)
    )
  }


}
