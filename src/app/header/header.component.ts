import { Component } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import { Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }
  onSaveData() {
    this.dataStorageService.storeMovies()
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
    this.dataStorageService.storeTV()
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
    this.dataStorageService.storeGames()
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
    this.dataStorageService.storefavouritesmovies()
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }
 onFetchData() {
    this.dataStorageService.getMovies();
    this.dataStorageService.getTvs();
    this.dataStorageService.getGames();
 }
  onLogout() {
    this.authService.logout();
  }
}
