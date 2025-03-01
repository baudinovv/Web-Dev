import { Component, type OnInit } from "@angular/core"
import type { Albums } from "../albums"
import { CommonModule } from "@angular/common"
import  { ActivatedRoute, Router } from "@angular/router"
import  { AlbumsService } from "../albums.service"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
@Component({
  selector: "app-albums-details",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="details__card">
      <div class="details__card-container">
        <input  type="text" [(ngModel)]="data.title">
        <input  type="text" [(ngModel)]="data.id">
        <input  type="text" [(ngModel)]="data.userId">
        <div class="details__btns">
          <button class="details__btns-save" type="submit" (click)="save()">Сохранить</button>
          <button class="details__btns-delete" type="button" (click)="delete()">Удалить</button>
        </div>
        <button [routerLink]="['/albums/' + this.pageId + '/photos']" class="details__btns-photo"> Фото </button>
      </div>
    </div>
  `,
  styleUrl: "./albums-details.component.css",
})
export class AlbumsDetailsComponent implements OnInit {
  data = {} as Albums
  originalId = 0
  public pageId = 0;
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.pageId = Number(this.route.snapshot.params["id"])
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"]
    this.albumsService.findAlbumByIdHttp(id).subscribe(
      (album) => (this.data = album),
      (error) => console.log(error),
    )
  }

  save(): void {
    this.data.id = typeof this.data.id === "string" ? Number.parseInt(this.data.id) : this.data.id
    this.data.userId = typeof this.data.userId === "string" ? Number.parseInt(this.data.userId) : this.data.userId

    this.albumsService.updateAlbum(this.data).subscribe(() => {
      // If ID was changed, navigate to the new ID
      if (this.originalId !== this.data.id) {
        this.router.navigate(["/albums", this.data.id])
      } else {
        this.router.navigate(["/albums"])
      }
    })
  }

  delete(): void {
    const id = Number()
    this.albumsService.deleteAlbumById(id).subscribe(() => {
      this.router.navigate(["/albums"])
    })
  }
}

