import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-home-actor',
  templateUrl: './home-actor.component.html',
  styleUrls: ['./home-actor.component.css']
})
export class HomeActorComponent implements OnInit {
	popularActors:any[] = [];

  constructor(
  	private moviesService: MoviesService,
  	private router: Router
	) { }

  ngOnInit() {
  	this.moviesService.getActorsPopular().subscribe( data => {
  		console.log(data);
  		this.popularActors = data;
  	});
  }


  watchActor(id: string){
  	this.router.navigate(['/actor', id]);
  }

}
