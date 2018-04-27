import { Injectable } from '@angular/core';
import {MovieService} from '../app/movies/movie.service';
import {Movie} from '../app/movies/movie.model';
import {TvService} from '../app/tv/tv.service';
import {TV} from '../app/tv/tv.model';
import {GameService} from '../app/games/game.service';
import {Game} from '../app/games/game.model';
import {AuthService} from '../app/auth/auth.service';
import {WishlistService} from '../app/wishlist/wishlist.service';
import {HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private movieService: MovieService, private tvService: TvService, private gameService: GameService,
              private authService: AuthService, private wishlistService: WishlistService) {}
  storeMovies() {
    // const token = this.authService.getToken();
     return this.http.put('https://ng-tyhd.firebaseio.com/movies.json', this.movieService.getMovies());
  }
  retrieveMovies() {
    this.http.get('https://ng-tyhd.firebaseio.com/root/movies.json')
      .subscribe(
        (data: Response) => {
          console.log('ret');
          const movies: Movie[] = data.json();
          console.log('ret');
          this.movieService.setMovies(movies);
          console.log('ret');
        }
      );
  }
  storeTV() {
    return this.http.put('https://ng-tyhd.firebaseio.com/root/tvs.json', this.tvService.getTVs());
  }
  // getTvs() {
  //   this.http.get('https://ng-tyhd.firebaseio.com/tvs.json')
  //     .subscribe(
  //       (data) => {
  //         const tvs: TV[] = data.json();
  //         this.tvService.setTvs(tvs);
  //       }
  //     );
  // }
  storeGames() {
    return this.http.put('https://ng-tyhd.firebaseio.com/root/games.json', this.gameService.getGames());
  }
  // getGames() {
  //   this.http.get('https://ng-tyhd.firebaseio.com/games.json')
  //     .subscribe(
  //       (data) => {
  //         const games: Game[] = data.json();
  //         this.gameService.setGames(games);
  //       }
  //     );
  // }
  storefavouritesmovies() {
    return this.http.put('https://ng-tyhd.firebaseio.com/root/favourites/movies.json', this.wishlistService.getMovie());
  }
  storefavouritestvs() {
    return this.http.put('https://ng-tyhd.firebaseio.com/root/favourites/tvshow.json', this.wishlistService.getTV());
  }
  storefavouritesgames() {
    return this.http.put('https://ng-tyhd.firebaseio.com/root/favourites/games.json', this.wishlistService.getGame());
  }
}
