import { Component, OnInit } from '@angular/core';
import {Movie} from '../movies/movie.model';
import {MovieService} from '../movies/movie.service';
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
  movie: Movie[];

  // id: number;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }
}
