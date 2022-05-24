import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backCheck'
})
export class BackCheckPipe implements PipeTransform {

  transform(esFavorito?: boolean): string {
    
     
      return esFavorito ? "<img src='../../assets/imgs/check-ok.png' width=35px>" :  "<img src='../../assets/imgs/check-no.png' width=35px>"   

  }

}
