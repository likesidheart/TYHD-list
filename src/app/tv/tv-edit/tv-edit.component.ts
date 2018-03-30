import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TvService} from '../tv.service';
// import {Movie} from '../movie.model';


@Component({
  selector: 'app-tv-edit',
  templateUrl: './tv-edit.component.html',
  styleUrls: ['./tv-edit.component.scss']
})
export class TvEditComponent implements OnInit {
  id: number;
  editMode = false;
  tvform: FormGroup;

  constructor(private route: ActivatedRoute,
              private tvService: TvService,
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
      this.tvService.updateTV(this.id, this.tvform.value);
    } else {
      this.tvService.addTV( this.tvform.value);
    }
    this.onCancel();
  }
  private initForm() {
    let tvName = '';
    let tvImagePath = '';
    let tvDescription = '';
    let tvYear = '';
    let tvrating = '';

    if (this.editMode) {
      const tv = this.tvService.getTV(this.id);
      tvName = tv.name;
      tvImagePath = tv.imagePath;
      tvDescription = tv.description;
      tvYear = tv.year;
      tvrating = tv.rating;
    }
    this.tvform = new FormGroup({
      'name': new FormControl(tvName, Validators.required),
      'imagePath': new FormControl(tvImagePath, Validators.required),
      'description': new FormControl(tvDescription, Validators.required),
      'year': new FormControl(tvYear, Validators.required),
      'rating' : new FormControl(tvrating, Validators.required)
    });
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

