import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {MovieService} from '../app/movies/movie.service';
import {Movie} from '../app/movies/movie.model';
import {TvService} from '../app/tv/tv.service';
import {TV} from '../app/tv/tv.model';
import {GameService} from '../app/games/game.service';
import {Game} from '../app/games/game.model';


@Injectable()
export class DataStorageService {
  constructor(private http: Http, private movieService: MovieService, private tvService: TvService, private gameService: GameService) {}
  storeMovies() {
     return this.http.put('https://ng-tyhd.firebaseio.com/movies.json', this.movieService.getMovies());
  }
  getMovies() {
    this.http.get('https://ng-tyhd.firebaseio.com/movies.json')
      .subscribe(
        (data) => {
          const movies: Movie[] = data.json();
          console.log(data);
          this.movieService.setMovies(movies);
        }
      );
  }
  storeTV() {
    return this.http.put('https://ng-tyhd.firebaseio.com/tvs.json', this.tvService.getTVs());
  }
  getTvs() {
    this.http.get('https://ng-tyhd.firebaseio.com/tvs.json')
      .subscribe(
        (data) => {
          const tvs: TV[] = data.json();
          this.tvService.setTvs(tvs);
        }
      );
  }
  storeGames() {
    return this.http.put('https://ng-tyhd.firebaseio.com/games.json', this.gameService.getGames());
  }
  getGames() {
    this.http.get('https://ng-tyhd.firebaseio.com/games.json')
      .subscribe(
        (data) => {
          const games: Game[] = data.json();
          this.gameService.setGames(games);
        }
      );
  }
}
