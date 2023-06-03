import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly storageKey = 'favoriteMovies';

  getFavorites(): Movie[] {
    const favoritesJson = localStorage.getItem(this.storageKey);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }
  isFavorite(movie: Movie): boolean {
    const favorites = this.getFavorites();
    return favorites.some((favorite) => favorite.id === movie.id);
  }

  toggleFavorite(movie: Movie): void {
    const favorites = this.getFavorites();
    const index = favorites.findIndex((favorite) => favorite.id === movie.id);

    if (index !== -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(movie);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  removeFavorite(movie: Movie): void {
    const favorites = this.getFavorites();
    const index = favorites.findIndex((favorite) => favorite.id === movie.id);

    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }
}
