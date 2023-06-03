import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.interface';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  isFavorite: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const movieId = params['id'];
      console.log('Movie ID:', movieId);

      this.movieService.getMovieDetails(movieId).subscribe(
        (movie: Movie) => {
          console.log('Retrieved Movie:', movie);
          this.movie = movie;
          this.isFavorite = this.favoritesService.isFavorite(movie);
        },
        (error) => {
          console.log('Error retrieving movie details:', error);
        }
      );
    });
  }

  toggleFavorite() {
    if (this.movie) {
      this.favoritesService.toggleFavorite(this.movie);
      this.isFavorite = this.favoritesService.isFavorite(this.movie);
    }
  }
}
