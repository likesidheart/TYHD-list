import {Component, OnInit } from '@angular/core';
import {TV} from '../tv.model';
import {TvService} from '../tv.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.scss']
})
export class TvListComponent implements OnInit {
  tvs: TV[];

  constructor(private tvService: TvService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tvService.tvsChanged
      .subscribe(
        (tvs: TV[]) => {
          this.tvs = tvs;
        }
      );
    this.tvs = this.tvService.getTVs();
  }

  onNewTV() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
