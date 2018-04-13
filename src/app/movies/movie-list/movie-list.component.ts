import {Component, OnInit } from '@angular/core';
import {Movie} from '../movie.model';
import {MovieService} from '../movie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {promise} from 'selenium-webdriver';
// import {MovieEditComponent} from '../movie-edit/movie-edit.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  // movies: Movie[];
  movies: any;

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.movieService.moviesChanged
    //   .subscribe(
    //     (movies: Movie[]) => {
    //       this.movies = movies;
    //     }
    //   );
    // this.movies = this.movieService.getMovies();
    this.getMovies();
  }

  getMovies() {
    this.movieService.getTopMovies()
      .subscribe(movies => {
        console.log(movies)
        this.movies = movies.results;
      }
  });

  onNewMovie() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
