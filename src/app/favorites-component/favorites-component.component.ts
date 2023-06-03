import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Movie } from '../movie.interface';

@Component({
  selector: 'app-favorites-component',
  templateUrl: './favorites-component.component.html',
  styleUrls: ['./favorites-component.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Movie[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFromFavorites(movie: Movie) {
    this.favoritesService.removeFavorite(movie);
    this.favorites = this.favoritesService.getFavorites();
  }
}
