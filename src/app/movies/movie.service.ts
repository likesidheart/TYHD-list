import { Injectable} from '@angular/core';
import {Movie} from './movie.model';
import {Subject} from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
  moviesChanged = new Subject<Movie[]>();
  constructor(  private http: HttpClient) {
  }
 private movies: Movie[] = [
    new Movie('Rush', 'For the Formula 1 lovers',
      'https://cdn.traileraddict.com/content/universal-pictures/rush2013-4.jpg',
      '2013', '8.1'),
    new Movie('Zindagi Na Milegi Dobara', 'All time Favourite',
      'https://i1.wp.com/bestoftheyear.in/wp-content/uploads/2016/03/zindagi-na-milegi-dobara.jpg?fit=400%2C578&ssl=1',
      '2011', '8.1'),
    new Movie('Avatar', 'Revolutionary VFX',
      'http://t0.gstatic.com/images?q=tbn:ANd9GcQCfmvrE4fMo2cd8esc7mDZPtFSJThAujddMPkRtti1_ij6u-jp',
      '2009', '7.8')
  ] ;
  getMovies() {
   return this.movies.slice();
 }
 getMovie(index: number) {
    return this.movies[index];
 }
 addMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
 }
 updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
   this.moviesChanged.next(this.movies.slice());
 }
 deleteMovie(index: number) {
        this.movies.splice(index, 1);
        this.moviesChanged.next(this.movies.slice());
 }
  getTopMovies() {
     return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=975d49ab8b9a7c4dd27643739483adc7')

  }

}
