import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.interface';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-list-component',
  templateUrl: './movie-list-component.component.html',
  styleUrls: ['./movie-list-component.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private movieDataService: MovieDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieDataService.movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }

  viewMovieDetails(movie: Movie) {
    const movieId = movie.id;
    this.router.navigate(['/movie-details', movieId]);
  }

  showMovieDetails(movie: Movie) {
    this.router.navigate(['/movie-details', movie.id]);
  }
}
