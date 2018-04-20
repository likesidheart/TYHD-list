import { Injectable } from '@angular/core';
import {Movie} from '../movies/movie.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WishlistService {
  private movies: Movie[] = [ ] ;
  favoriteschanged = new Subject();
  addMovie(movies: Movie) {
    this.movies.push(movies);
    this.favoriteschanged.next(this.movies.slice());
  }
  getMovie() {
    return this.movies.slice();
  }
}
