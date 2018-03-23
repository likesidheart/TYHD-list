import {Component, OnInit} from '@angular/core';

import {Movie} from '../movie.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
   movie: Movie;
   id: number;
  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router ) { }
  onEditMovie() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
            this.id = +params['id'];
            this.movie = this.movieService.getMovie(this.id);
        }
      );
  }
}
