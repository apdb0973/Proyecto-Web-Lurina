import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backEpico'
})
export class BackEpicoPipe implements PipeTransform {

  transform(esEpico?: boolean): string {
    
     
      return esEpico ? "<img src='../../../../assets/imgs/epica.png' width=35px>" :  "<img src='../../../../assets/imgs/noEpica.png' width=35px>"   

  }

}
