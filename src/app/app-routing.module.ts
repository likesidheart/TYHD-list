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
import {GameStartComponent} from './games/game-start/game-start.component';
import {GameEditComponent} from './games/game-edit/game-edit.component';
import {GameDetailComponent} from './games/game-detail/game-detail.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGurd} from './auth/auth-gurd.service';

const appRoutes: Routes = [
  { path: ' ' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'movies' , component: MoviesComponent , children: [
      {path: '', component: MovieStartComponent },
      {path: 'new', component: MovieEditComponent, canActivate: [AuthGurd]},
      {path: ':id', component: MovieDetailComponent },
      {path: ':id/edit', component: MovieEditComponent, canActivate: [AuthGurd] },
    ]},
  { path: 'tv' , component: TvComponent, children: [
      {path: '', component: TvStartComponent },
      {path: 'new', component: TvEditComponent, canActivate: [AuthGurd]},
      {path: ':id', component: TvDetailComponent },
      {path: ':id/edit', component: TvEditComponent, canActivate: [AuthGurd] },
    ] },
  { path: 'games' , component: GamesComponent, children: [
      {path: '', component: GameStartComponent },
      {path: 'new', component: GameEditComponent, canActivate: [AuthGurd] },
      {path: ':id', component: GameDetailComponent },
      {path: ':id/edit', component: GameEditComponent, canActivate: [AuthGurd] },
    ]},
  { path: 'wish-list' , component: WishlistComponent, canActivate: [AuthGurd] },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
