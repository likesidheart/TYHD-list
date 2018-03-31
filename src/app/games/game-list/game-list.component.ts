import {Component, OnInit } from '@angular/core';
import {Game} from '../game.model';
import {GameService} from '../game.service';
import {ActivatedRoute, Router} from '@angular/router';
import {promise} from 'selenium-webdriver';
// import {MovieEditComponent} from '../movie-edit/movie-edit.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.gameService.gamesChanged
      .subscribe(
        (games: Game[]) => {
          this.games = games;
        }
      );
    this.games = this.gameService.getGames();
  }

  onNewGame() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
