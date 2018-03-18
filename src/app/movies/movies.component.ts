import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Movie} from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  selectedMovie: Movie;
  constructor() { }
  ngOnInit() {
  }

}
