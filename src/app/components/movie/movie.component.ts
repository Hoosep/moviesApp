import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { ConvertImgToUrlPipe } from '../../pipes/convert-img-to-url.pipe';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  infoMovie:any = [];
  infoCast:any = [];
  imageUrl:string = "";


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {
  }

  ngOnInit() {   

    this.activatedRoute.params.subscribe( params => {
      this.getInformationMovie(params.id);
      this.getInformationCast(params.id);
    });

  }


  getInformationMovie(id:string){
    this.moviesService.getMovie(id)
        .subscribe( data => {
          console.log(data);
          this.infoMovie = data;
          this.imageUrl = ConvertImgToUrlPipe.prototype.transform(this.infoMovie['backdrop_path'], 'backdrop_path');
        });
  }

  getInformationCast(id:string){
    this.moviesService.getPrincipalCast(id)
        .subscribe(data => {
          console.log(data);
          this.infoCast = data;
        });
  }



  watchActor(id: string){
    this.router.navigate(['/actor', id]);
  }

}
