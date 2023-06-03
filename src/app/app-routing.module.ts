import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list-component/movie-list-component.component';
import { FavoritesComponent } from './favorites-component/favorites-component.component';
import { MovieDetailsComponent } from './movie-details-component/movie-details-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'search', component: SearchComponentComponent },
];

@NgModule({
  declarations: [
    MovieListComponent,
    SearchComponentComponent,
    FavoritesComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule],
})
export class AppRoutingModule {}
