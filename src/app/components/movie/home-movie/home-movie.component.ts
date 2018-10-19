import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.css']
})
export class HomeMovieComponent implements OnInit {

  popularMovies:any[] = [];
  constructor (public moviesService: MoviesService){
    this.moviesService.getPopularMovies().subscribe( (data) => {
      this.popularMovies = data; 
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
