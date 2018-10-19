import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
