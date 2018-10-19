import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortOverview'
})
export class ShortOverviewPipe implements PipeTransform {

  transform(overview: string): any {

    let maxWords = 7;

    let trimmedString = overview.split(" ").splice(0, maxWords).join(" ");
    trimmedString = trimmedString.trim();
    trimmedString += "...";
    return trimmedString;

  }

}
