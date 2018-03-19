import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
 @Output() movieWasSelected = new EventEmitter<Movie>();
  movies: Movie[] = [
    new Movie('Rush', 'For the Formula 1 lovers',
      'https://cdn.traileraddict.com/content/universal-pictures/rush2013-4.jpg',
      2013)
  ] ;

    constructor() { }

  ngOnInit() {
  }
  onMovieSelected(movie: Movie) {
    this.movieWasSelected.emit(movie);
  }

}
