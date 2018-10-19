import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  detailsPerson:any = {};
  moviesActor:any[] = [];

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.getPersonalInformation(params.id);
      this.getCreditsActor(params.id);
    });
  }

  getPersonalInformation(id: string){
    this.moviesService.getPersonDetails(id)
        .subscribe( data => {
          this.detailsPerson = data;

        });
  }

  getCreditsActor(id: string){
    this.moviesService.getCombinedCreditsActor(id)
        .subscribe( data => {
          console.log(data);
          this.moviesActor = data;
        });
  }


  watchMovie(id: string){
    this.router.navigate(['/movie', id])
  }

}
