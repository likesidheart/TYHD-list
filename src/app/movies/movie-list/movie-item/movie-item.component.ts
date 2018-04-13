import {Component, OnInit, Input } from '@angular/core';
import {Movie} from '../../movie.model';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  // @Input() index: number;
  movies: any;

  constructor() {
  }


  ngOnInit() {
  }



  // onSelectMovieCard() {
  //   this.movieService.movieSelected.emit(this.movie);
  // }

}
