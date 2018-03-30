import { Component, OnInit } from '@angular/core';
import {TvService} from './tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
  providers: [TvService]
})
export class TvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
