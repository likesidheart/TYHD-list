import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../movie.service';
// import {Movie} from '../movie.model';


@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  id: number;
  editMode = false;
  movieform: FormGroup;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
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
        this.movieService.updateMovie(this.id, this.movieform.value);
      } else {
        this.movieService.addMovie( this.movieform.value);
      }
      this.onCancel();
  }
  private initForm() {
    let movieName = '';
    let movieImagePath = '';
    let movieDescription = '';
    let movieYear = '';

    if (this.editMode) {
      const movie = this.movieService.getMovie(this.id);
      movieName = movie.name;
      movieImagePath = movie.imagePath;
      movieDescription = movie.description;
      movieYear = movie.year;
    }
    this.movieform = new FormGroup({
      'name': new FormControl(movieName, Validators.required),
      'imagePath': new FormControl(movieImagePath, Validators.required),
      'description': new FormControl(movieDescription, Validators.required),
      'year': new FormControl(movieYear, Validators.required)
    });
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

