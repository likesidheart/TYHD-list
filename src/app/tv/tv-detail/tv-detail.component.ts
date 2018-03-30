import {Component, OnInit} from '@angular/core';

import {TV} from '../tv.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TvService} from '../tv.service';
// import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {
  tv: TV;
  id: number;
  constructor(private tvService: TvService,
              private route: ActivatedRoute,
              private router: Router ) { }
  onEditTV() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.tv = this.tvService.getTV(this.id);
        }
      );
  }
  onDeleteTV() {
    this.tvService.deleteTV(this.id);
    this.router.navigate(['/tv']);
  }

}
