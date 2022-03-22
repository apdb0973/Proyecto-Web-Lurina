import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoriaMinimal } from '../../categoria/categoria-minimal.model';
import { CategoriaService } from '../../categoria/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoriasMinimal: CategoriaMinimal[]=[];

  display = "none";
  categoriaAEliminar?:number = 0;
  error:boolean=false;
  success:boolean=false;
  mensaje:String="";

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {

    this.cargardatos();
  }

  cargardatos(){
    console.log('Cargando...');
    this.categoriaService.obtenerCategoriasMinimal().subscribe(respuesta=>{ console.log('Fin de la carga'); this.categoriasMinimal=respuesta;});
    
  }
  abrirModalEliminar(id?:number){
    console.log(id);
    this.display="block"
    this.categoriaAEliminar=id; // dato que viene del html y pasa a la variable pocionAEliminar para luego pasarsela a la funcion eliminar.
    this.error=false;   //Refrescamos la pantalla eliminando cualquier mensaje residual
    this.success=false; //Refrescamos la pantalla eliminando cualquier mensaje residual
  }

  eliminar(id?:number){

    this.categoriaService.eliminarCategoria(id).subscribe                       // Ordeno al backend que elimine la Pocion
    (
       (respuest)=> 
       {                                                       // Si la elimina correctamente, procedo a refrescar la pantalla
         this.categoriaService.obtenerCategoriasMinimal().subscribe //Cargo la lista de nuevo para refrescar pantalla
         (
           respuesta=> 
           {                                                   //Si la carga correctamente.....  
            
             this.categoriasMinimal=respuesta;                   //vuelco la lista en el array PocionesMinimal.
             this.success=true;
             console.log('Fin de la carga');
           }
         );
         console.log(respuest)
         this.error=false;
         this.mensaje="El id se ha borrado correctamente"; //los 3 ultimos: reseteo las variables y cierro el modal.
         this.cerrarModal();                  
       },

        (err)=>                                                   //Si no ha podido borrar la pocion.......
        {
          this.error = true;
          this.success = false;
          this.mensaje="Se produjo un error al borrar la categoria Error -> " + err.status;
          this.cerrarModal();
          console.log(err)         
        }    
    );
     
  }
// -------------------------------------------------------

// (respuest)=> 
//       {                                                       // Si la elimina correctamente, procedo a refrescar la pantalla
//         this.pocionService.obtenerpocionesMinimal().subscribe //Cargo la lista de nuevo para refrescar pantalla
//         (
//           respuesta=> 
//           {                                                   //Si la carga correctamente.....  
            
//             this.pocionesMinimal=respuesta;                   //vuelco la lista en el array PocionesMinimal.
//             this.success=true;
//             console.log('Fin de la carga');
//           }
//         );
//         this.error=false;
//         this.mensaje="El id se ha borrado correctamente"; //los 3 ultimos: reseteo las variables y cierro el modal.
//         this.cerrarModal();                  
//       },

// (err)=>                                                   //Si no ha podido borrar la pocion.......
//       {
//         this.error = true;
//         this.success = false;
//         this.mensaje="Se produjo un error al borrar la poción Error -> " + err;
//         this.cerrarModal();         
//       }    



















// ---------------------------------------------------------


  cerrarModal(){
    this.display="none";

  }

}
