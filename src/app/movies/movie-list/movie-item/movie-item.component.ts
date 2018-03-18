import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Movie} from '../../movie.model';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelectMovieCard() {
    this.movieSelected.emit();
  }

}
