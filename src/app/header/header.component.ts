import { Component } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import { Response } from '@angular/http';


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
        (response: Response) => {
          console.log(response);
        }
      );
    this.dataStorageService.storeTV()
      .subscribe(
        (response: Response ) => {
          console.log(response);
        }
      );
    this.dataStorageService.storeGames()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.dataStorageService.storefavouritesmovies()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
      this.dataStorageService.storefavouritestvs()
        .subscribe(
          (response: Response) => {
            console.log(response);
          }
        );
      this.dataStorageService.storefavouritesmovies()
        .subscribe(
          (response: Response) => {
            console.log(response);
          }
        );
  }
  onFetchData() {
    this.dataStorageService.retrieveMovies();
  }
  onLogout() {
    this.authService.logout();
  }
}
