import {Component,  OnInit} from '@angular/core';
import {Movie} from '../movie.model';
import {MovieService} from '../movie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
// import {MovieEditComponent} from '../movie-edit/movie-edit.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  subscription: Subscription;

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.movieService.moviesChanged
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
        }
      );
    this.movies = this.movieService.getMovies();
  }

  onNewMovie() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
