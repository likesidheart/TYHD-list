import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GameService} from '../game.service';
// import {Movie} from '../movie.model';


@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {
  id: number;
  editMode = false;
  gameform: FormGroup;

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router) { }

  // retrive the id
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onSubmit() {
    if (this.editMode) {
      // const newMovie = new Movie(
      //   this.movieform.value['name'],
      //   this.movieform.value['description'],
      //   this.movieform.value['imagePath'],
      //   this.movieform.value['year']
      // );
      this.gameService.updateGame(this.id, this.gameform.value);
    } else {
      this.gameService.addGame( this.gameform.value);
    }
    this.onCancel();
  }
  private initForm() {
    let gameName = '';
    let gameImagePath = '';
    let gameDescription = '';
    let gameYear = '';
    let gamerating = '';

    if (this.editMode) {
      const game = this.gameService.getGame(this.id);
      gameName = game.name;
      gameImagePath = game.imagePath;
      gameDescription = game.description;
      gameYear = game.year;
      gamerating = game.rating;
    }
    this.gameform = new FormGroup({
      'name': new FormControl(gameName, Validators.required),
      'imagePath': new FormControl(gameImagePath, Validators.required),
      'description': new FormControl(gameDescription, Validators.required),
      'year': new FormControl(gameYear, Validators.required),
      'rating' : new FormControl(gamerating, Validators.required)
    });
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

