import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.interface';
import { MovieDataService } from '../movie-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
})
export class SearchComponentComponent implements OnInit {
  searchQuery!: string;
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private movieDataService: MovieDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieDataService.movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }

  searchMovies() {
    this.movieService.searchMoviesByTitle(this.searchQuery).subscribe(
      (movies: Movie[]) => {
        this.movieDataService.updateMovies(movies);
        this.router.navigate(['/movies']);
      },
      (error) => {
        console.log('Error searching movies:', error);
      }
    );
  }

  showMovieDetails(movie: Movie) {
    const movieId = movie.id;
    this.router.navigate(['/movie-details', movieId]);
  }
}
