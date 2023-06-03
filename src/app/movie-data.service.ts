import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  public movies$ = this.moviesSubject.asObservable();

  updateMovies(movies: Movie[]) {
    this.moviesSubject.next(movies);
  }
}
