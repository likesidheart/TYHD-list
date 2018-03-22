import {EventEmitter, Injectable} from '@angular/core';
import {Movie} from './movie.model';

@Injectable()
export class MovieService {
  movieSelected = new EventEmitter<Movie>();

 private movies: Movie[] = [
    new Movie('Rush', 'For the Formula 1 lovers',
      'https://cdn.traileraddict.com/content/universal-pictures/rush2013-4.jpg',
      2013),
    new Movie('Zindagi Na Milegi Dobara', 'All time Favourite',
      'https://i1.wp.com/bestoftheyear.in/wp-content/uploads/2016/03/zindagi-na-milegi-dobara.jpg?fit=400%2C578&ssl=1',
      2011),
    new Movie('Avatar', 'Revolutionary VFX',
      'http://t0.gstatic.com/images?q=tbn:ANd9GcQCfmvrE4fMo2cd8esc7mDZPtFSJThAujddMPkRtti1_ij6u-jp',
      2009)
  ] ;
  getMovies() {
   return this.movies.slice();
 }

  constructor() { }

}
