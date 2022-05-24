import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Item, tipo_de_item } from '../../Items/Item.model';
import { ItemService } from '../../Items/Item.service';


@Component({
  selector: 'app-items',
  templateUrl: './Items.component.html',
  styleUrls: ['./Items.component.scss']
})
export class ItemComponent implements OnInit {

  items: Item[]=[];

  display = "none";
  itemAEliminar?:number = 0;
  error:boolean=false;
  success:boolean=false;
  mensaje:String="";

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.cargardatos();
  }

  cargardatos(){
    console.log('Cargando...');
    this.itemService.obtenerItems().subscribe(respuesta=>{ console.log('Fin de la carga'); this.items=respuesta;});
    console.log(this.items);
  }
  abrirModalEliminar(id?:number){
    console.log(id);
    this.display="block"
    this.itemAEliminar=id; // dato que viene del html y pasa a la variable pocionAEliminar para luego pasarsela a la funcion eliminar.
    this.error=false;   //Refrescamos la pantalla eliminando cualquier mensaje residual
    this.success=false; //Refrescamos la pantalla eliminando cualquier mensaje residual
  }

  eliminar(id?:number){

    this.itemService.eliminarItem(id).subscribe                       // Ordeno al backend que elimine el Item
    (
       (respuest)=> 
       {                                                       // Si la elimina correctamente, procedo a refrescar la pantalla
         this.itemService.obtenerItems().subscribe //Cargo la lista de nuevo para refrescar pantalla
         (
           respuesta=> 
           {                                                   //Si la carga correctamente.....  
            
             this.items=respuesta;                   //vuelco la lista en el array PocionesMinimal.
             this.success=true;
             console.log('Fin de la carga');
           }
         );
         console.log(respuest)
         this.error=false;
         this.mensaje="El id se ha borrado correctamente"; //los 3 ultimos: reseteo las variables y cierro el modal.
         this.cerrarModal();                  
       },

        (err)=>                                                   //Si no ha podido borrar el item.......
        {
          this.error = true;
          this.success = false;
          this.mensaje="Se produjo un error al borrar la item Error -> " + err.status;
          this.cerrarModal();
          console.log(err)         
        }    
    );
     
  }

  cerrarModal(){
    this.display="none";

  }

}
