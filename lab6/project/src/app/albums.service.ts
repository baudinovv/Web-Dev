import { Injectable } from "@angular/core"
import  { HttpClient } from "@angular/common/http"
import { type Observable, of } from "rxjs"
import { tap } from "rxjs/operators"
import type { Albums } from "./albums"
import { Photos } from "./photos"

@Injectable({
  providedIn: "root",
})
export class AlbumsService {
  private apiUrl = "https://jsonplaceholder.typicode.com/albums"
  private albums: Albums[] = []

  constructor(private http: HttpClient) {
    this.loadAlbumsFromStorage()
  }

  private loadAlbumsFromStorage(): void {
    const storedAlbums = localStorage.getItem("albums")
    if (storedAlbums) {
      this.albums = JSON.parse(storedAlbums)
    }
  }

  private saveAlbumsToStorage(): void {
    localStorage.setItem("albums", JSON.stringify(this.albums))
  }

  getAlbums(): Observable<Albums[]> {
    if (this.albums.length > 0) {
      return of(this.albums)
    }

    return this.http.get<Albums[]>(this.apiUrl).pipe(
      tap((albums) => {
        this.albums = albums
        this.saveAlbumsToStorage()
      }),
    )
  }
  getPhoto(id: number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  findAlbumByIdHttp(id: string): Observable<Albums> {
    const album = this.albums.find((a) => a.id === Number(id))
    if (album) {
      return of(album)
    }

    return this.http.get<Albums>(`${this.apiUrl}/${id}`)
  }

  deleteAlbumById(id: number): Observable<boolean> {
    this.albums = this.albums.filter((album) => album.id !== id)
    this.saveAlbumsToStorage()
    return of(true) 
  }

  updateAlbum(album: Albums): Observable<Albums> {
    const index = this.albums.findIndex((a) => a.id === album.id)
    if (index !== -1) {
      this.albums[index] = album
      this.saveAlbumsToStorage()
    }
    return of(album)
  }
}

