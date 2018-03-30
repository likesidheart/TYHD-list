import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './home/cards/cards.component';
import { MoviesComponent } from './movies/movies.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './tv/tv.component';
import { GamesComponent } from './games/games.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TvStartComponent } from './tv/tv-start/tv-start.component';
import { TvListComponent } from './tv/tv-list/tv-list.component';
import { TvItemComponent } from './tv/tv-list/tv-item/tv-item.component';
import { TvEditComponent } from './tv/tv-edit/tv-edit.component';
import { TvDetailComponent } from './tv/tv-detail/tv-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    MoviesComponent,
    HomeComponent,
    TvComponent,
    GamesComponent,
    WishlistComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieStartComponent,
    TvStartComponent,
    TvListComponent,
    TvItemComponent,
    TvEditComponent,
    TvDetailComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
