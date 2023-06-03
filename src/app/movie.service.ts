// movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'c262d0bfae968602d3d51bac15678415';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMoviesByTitle(title: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${title}`;
    return this.http.get(url).pipe(
      map((response: any) =>
        response.results.map((result: any) => ({
          id: result.id,
          title: result.title,
          releaseDate: result.release_date,
          summary: result.overview,
          averageRating: result.vote_average,
          description: result.overview,
          posterUrl: result.poster_path,
        }))
      )
    );
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((response: any) => ({
        id: response.id,
        title: response.title,
        releaseDate: response.release_date,
        summary: response.overview,
        averageRating: response.vote_average,
        description: response.overview,
        posterUrl: response.poster_path,
      }))
    );
  }
}
