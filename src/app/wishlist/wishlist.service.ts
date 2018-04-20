import { Injectable } from '@angular/core';
import {Movie} from '../movies/movie.model';
import {Subject} from 'rxjs/Subject';
import {TV} from '../tv/tv.model';
import {Game} from '../games/game.model';

@Injectable()
export class WishlistService {
  private movies: Movie[] = [ ] ;
  private tvs: TV[] = [];
  private games: Game[] = [];

  favoriteschanged = new Subject();
  addMovie(movies: Movie) {
    this.movies.push(movies);
    this.favoriteschanged.next(this.movies.slice());
  }
  getMovie() {
    return this.movies.slice();
  }
  addTV(tvs: TV) {
    this.tvs.push(tvs);
    this.favoriteschanged.next(this.tvs.slice());
  }
  getTV() {
    return this.tvs.slice();
  }
  addGame(games: Game) {
    this.games.push(games);
    this.favoriteschanged.next(this.games.slice());
  }
  getGame() {
    return this.games.slice();
  }
  // removeMovieFromWishlist(index: number) {
  //     this.movies.splice(index, 1);
  //     this.favoriteschanged.next(this.movies.slice());
  //   }
  // removeTVfromWishlist(index: number) {
  //   this.tvs.splice(index, 1);
  //   this.favoriteschanged.next(this.tvs.slice());
  // }
  // removeGamefromWishlist(index: number) {
  //   this.tvs.splice(index, 1);
  //   this.favoriteschanged.next(this.tvs.slice());
  // }
}
