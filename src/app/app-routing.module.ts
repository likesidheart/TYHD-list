import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import {HomeComponent} from './home/home.component';
import {TvComponent} from './tv/tv.component';
import {GamesComponent} from './games/games.component';
import {WishlistComponent} from './wishlist/wishlist.component';

const appRoutes: Routes = [
  { path: ' ' , redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  { path: 'movies' , component: MoviesComponent },
  { path: 'tv' , component: TvComponent },
  { path: 'games' , component: GamesComponent },
  { path: 'wish-list' , component: WishlistComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
