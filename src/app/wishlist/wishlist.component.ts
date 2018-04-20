import { Component, OnInit } from '@angular/core';
import {Movie} from '../movies/movie.model';
import {MovieService} from '../movies/movie.service';
import {WishlistService} from './wishlist.service';
import {Subscription} from 'rxjs/Subscription';
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
  }
}
