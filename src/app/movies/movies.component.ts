import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
import {Movie} from './movie.model';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  selectedMovie: Movie;
  constructor(private movieService: MovieService) { }
  ngOnInit() {
      this.movieService.movieSelected
        .subscribe(
          (movie: Movie) => {
            this.selectedMovie = movie;
          }
        );
  }

}
