import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { ActorComponent} from './components/actor/actor.component';
import { HomeMovieComponent } from './components/movie/home-movie/home-movie.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
      path: 'movie/:id', component: MovieComponent },
    { path: 'movies', component: HomeMovieComponent },
    { path: 'actor/:id', component: ActorComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];