import { Component, OnInit } from '@angular/core';
import {Movie} from '../movies/movie.model';
import {MovieService} from '../movies/movie.service';
import {WishlistService} from './wishlist.service';
import {Subscription} from 'rxjs/Subscription';
import {TV} from '../tv/tv.model';
import {Game} from '../games/game.model';
// import {ActivatedRoute, Params, Router} from '@angular/router';
// import {MovieService} from '../movies/movie.service';
// import {Movie} from '../movies/movie.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  providers: [MovieService]
})
export class WishlistComponent implements OnInit {
  movies: Movie[];
  tvs: TV[];
  games: Game[];
  id: number;
  private subscription: Subscription;

  // id: number;

  constructor(private wishlistService: WishlistService) {
  }
  ngOnInit() {
    this.movies = this.wishlistService.getMovie();
    this.subscription = this.wishlistService.favoriteschanged
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
        }
      );
    this.tvs = this.wishlistService.getTV();
    this.subscription = this.wishlistService.favoriteschanged
      .subscribe(
        (tvs: TV[]) => {
          this.tvs = tvs;
        }
      );
    this.games = this.wishlistService.getGame();
    this.subscription = this.wishlistService.favoriteschanged
      .subscribe(
        (games: Game[]) => {
          this.games = games;
        }
      );
  }
  // onRemoveMovie() {
  //   this.wishlistService.removeMovieFromWishlist(this.id);
  // }
  // onRemoveTV() {
  //   this.wishlistService.removeTVfromWishlist(this.id);
  // }
  // onRemoveGame() {
  //   this.wishlistService.removeGamefromWishlist(this.id);
  // }
}
