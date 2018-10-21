import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
	moviesGenre:any[] = [];
  titleGenre: string;

  constructor(
  	private moviesService: MoviesService,
  	private router: Router,
  	private activatedRoute: ActivatedRoute
	) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.titleGenre = params.nameGenre;
  		this.getMoviesByGenre(params.id);

  	});
  }


  getMoviesByGenre(id: string){
  	this.moviesService.getMoviesByGenre(id).subscribe(data => {
  		console.log(data);
  		this.moviesGenre = data;
  	});
  }

}
