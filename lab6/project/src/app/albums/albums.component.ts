import { Component, type OnInit } from "@angular/core"
import  { AlbumsService } from "../albums.service"
import  { Albums } from "../albums"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-albums",
  imports: [CommonModule, RouterModule],
  standalone: true,
  template: `
    <div class="albums">
      <div class="albums__item" *ngFor="let item of albums" [routerLink]="['/albums', item.id]" >
        <div class="albums__item-title"> {{ item.title }} </div>
      </div>
    </div>
  `,
  styleUrl: "./albums.component.css",
})
export class AlbumsComponent implements OnInit {
  albums: Albums[] = []

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.loadAlbums()
  }

  loadAlbums() {
    this.albumsService.getAlbums().subscribe(
      (albums) => {
        this.albums = albums
      },
      (error) => console.log(error),
    )
  }
}

