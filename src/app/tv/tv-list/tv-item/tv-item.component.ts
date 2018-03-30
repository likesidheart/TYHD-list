import {Component, OnInit, Input } from '@angular/core';
import {TV} from '../../tv.model';
// import {MovieService} from '../../movie.service';


@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent implements OnInit {
  @Input() tv: TV;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  // onSelectMovieCard() {
  //   this.movieService.movieSelected.emit(this.movie);
  // }

}
