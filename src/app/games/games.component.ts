import { Component, OnInit } from '@angular/core';
import {GameService} from './game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
