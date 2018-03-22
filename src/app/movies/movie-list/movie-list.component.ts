import {Component, OnInit } from '@angular/core';
import {Movie} from '../movie.model';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

    constructor(private movieService: MovieService) { }

  ngOnInit() {
      this.movies = this.movieService.getMovies();
  }

}
