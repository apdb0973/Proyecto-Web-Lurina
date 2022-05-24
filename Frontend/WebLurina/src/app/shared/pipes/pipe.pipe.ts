import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Pipe'
})
export class PipePipe implements PipeTransform {

  transform(favorito?: boolean): string {
    
    if (favorito) {  
      return '<img class="icono" src="../../assets/imgs/heart-fill.svg" alt="">' } else {return '<img class="icono" src="../../assets/imgs/heart.svg" alt="">'}
  }

}


