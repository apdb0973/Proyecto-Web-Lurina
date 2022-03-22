import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epico'
})
export class EpicoPipe implements PipeTransform {

  transform(esEpico?: boolean): string {
    
    if (esEpico) {  
      return "<img src='../../../../assets/imgs/epica.png' width=35px>"     } else return ""
  
  }

}
