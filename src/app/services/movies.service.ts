import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKEY = '134def742796fa4fab33ba6cc2f32b71';
  private movieURL = 'https://api.themoviedb.org/3';


  constructor( private http: HttpClient) { }


  getPopularMovies(){
    let url = `${this.movieURL}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKEY}&language=en`;

    return this.http
               .get(url)
               .pipe( map( data =>  data['results'] ));
  }


  getMovie(id: string){
    let url = `${this.movieURL}/movie/${id}?api_key=${this.apiKEY}&language=en-US`;

    return this.http
               .get(url)
               .pipe( map ( data => data ));
  }

  getPrincipalCast(id: string){
    let url = `${this.movieURL}/movie/${id}/credits?api_key=${this.apiKEY}`;

    return this.http
               .get(url)
               .pipe( map ( data => data['cast'].slice(0, 5) ));
  }

  getPersonDetails(id: string){
    let url = `${this.movieURL}/person/${id}?api_key=${this.apiKEY}`;

    return this.http
               .get(url)
               .pipe( map ( data => data));

  }

  getCombinedCreditsActor(id: string){
    let url = `${this.movieURL}/person/${id}/combined_credits?api_key=${this.apiKEY}`;
  
    return this.http 
               .get(url)
               .pipe( map ( data => data['cast'].slice(0, 8)));
  }

  getActorsPopular(){
    let url = `${this.movieURL}/person/popular?api_key=${this.apiKEY}`;

    return this.http
               .get(url)
               .pipe( map ( data => data['results']));
  }


}
