import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backFavorito'
})
export class BackFavoritoPipe implements PipeTransform {

  transform(esFavorito?: boolean): string {
    
     
      return esFavorito ? "<img src='../../assets/imgs/heart-fill.svg' width=35px>" :  "<img src='../../assets/imgs/heart.svg' width=35px>"   

  }

}
