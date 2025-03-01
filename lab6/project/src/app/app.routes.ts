import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    title: 'Albums'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About'
  },
  {
    path: 'albums/:id',
    component: AlbumsDetailsComponent,
    title: 'Details'
  },
  {
    path: 'albums/:id/photos',
    component: AlbumsPhotosComponent,
    title: 'Photos'
  },
  
];
