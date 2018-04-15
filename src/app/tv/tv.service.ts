import { Injectable} from '@angular/core';
import { TV } from './tv.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TvService {
  tvsChanged = new Subject<TV[]>();

  private tvs: TV[] = [
    new TV('F.R.I.E.N.D.S', 'Best refreshment',
      'https://i.pinimg.com/originals/4b/bb/cd/4bbbcd24861c98003a485a1162ea93ac.jpg',
      '1994', '8.9'),
    new TV('Top Gear', 'Only for the petrol heads',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqRCtJvnLK7l2cjlfgWmnOFFkdcST7_WSOASvl7agwV-9se7qlQ',
      '2002', '8.7'),
    new TV('Game of Thrones', 'All genre in one',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jztkyxglu8yhkyzgF1MbGLtQ5LhKNhCFV23_Ob0zZDSZx68f',
      '2011', '9.5')
  ] ;
  getTVs() {
    return this.tvs.slice();
  }
  getTV(index: number) {
    return this.tvs[index];
  }
  addTV(tv: TV) {
    this.tvs.push(tv);
    this.tvsChanged.next(this.tvs.slice());
  }
  updateTV(index: number, newTV: TV) {
    this.tvs[index] = newTV;
    this.tvsChanged.next(this.tvs.slice());
  }
  deleteTV(index: number) {
    this.tvs.splice(index, 1);
    this.tvsChanged.next(this.tvs.slice());
  }
  setTvs(tvs: TV[]) {
    this.tvs = tvs;
    this.tvsChanged.next(this.tvs.slice());
  }


  constructor() { }
}
