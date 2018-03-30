import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import {HomeComponent} from './home/home.component';
import {TvComponent} from './tv/tv.component';
import {GamesComponent} from './games/games.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {MovieEditComponent} from './movies/movie-edit/movie-edit.component';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import {MovieStartComponent} from './movies/movie-start/movie-start.component';
import {TvStartComponent} from './tv/tv-start/tv-start.component';
import {TvEditComponent} from './tv/tv-edit/tv-edit.component';
import {TvDetailComponent} from './tv/tv-detail/tv-detail.component';

const appRoutes: Routes = [
  { path: ' ' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'movies' , component: MoviesComponent , children: [
      {path: '', component: MovieStartComponent },
      {path: 'new', component: MovieEditComponent },
      {path: ':id', component: MovieDetailComponent },
      {path: ':id/edit', component: MovieEditComponent },
    ]},
  { path: 'tv' , component: TvComponent, children: [
      {path: '', component: TvStartComponent },
      {path: 'new', component: TvEditComponent },
      {path: ':id', component: TvDetailComponent },
      {path: ':id/edit', component: TvEditComponent },
    ] },
  { path: 'games' , component: GamesComponent },
  { path: 'wish-list' , component: WishlistComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
