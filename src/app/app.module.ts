import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';


//Routes import 
import { ROUTES } from './app.routes';
import { ConvertImgToUrlPipe } from './pipes/convert-img-to-url.pipe';
import { ShortOverviewPipe } from './pipes/short-overview.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { ActorComponent } from './components/actor/actor.component';
import { HomeMovieComponent } from './components/movie/home-movie/home-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ConvertImgToUrlPipe,
    ShortOverviewPipe,
    MovieComponent,
    ActorComponent,
    HomeMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
