import {Component, OnInit} from '@angular/core';

import {Game} from '../game.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GameService} from '../game.service';
// import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game: Game;
  id: number;
  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router ) { }
  onEditGame() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onWishlist() {
    this.router.navigate(['wish-list']);
    console.log('fav games!');
    this.gameService.addGametoFavourites(this.game);
    console.log('Game added!');
  }
  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.game = this.gameService.getGame(this.id);
        }
      );
  }
  onDeleteGame() {
    this.gameService.deleteGame(this.id);
    this.router.navigate(['/games']);
  }


}
