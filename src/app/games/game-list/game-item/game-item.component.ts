import {Component, OnInit, Input } from '@angular/core';
import {Game} from '../../game.model';
// import {MovieService} from '../../movie.service';


@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  // onSelectMovieCard() {
  //   this.movieService.movieSelected.emit(this.movie);
  // }

}
