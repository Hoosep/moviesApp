import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertImgToUrl'
})
export class ConvertImgToUrlPipe implements PipeTransform {

  transform(url: string, type:string): any {
    let img;

    switch (type) {
      case "poster_path":
        img = `https://image.tmdb.org/t/p/w500${url}`;
        break;
      case "backdrop_path":
        img = `https://image.tmdb.org/t/p/w1400_and_h450_face${url}`;
        break;
      case "profile_path":
        img = `https://image.tmdb.org/t/p/w276_and_h350_face${url}`;
        break;
      case "profile_path_actor":
        img = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${url}`;
        break;
      default:
          img = 'assets/img/no-photo-available.jpg';
        break;
    }

    if (!url) {
      img = 'assets/img/shared/no-photo-available.jpg';
    }

    return img;
  }

}
