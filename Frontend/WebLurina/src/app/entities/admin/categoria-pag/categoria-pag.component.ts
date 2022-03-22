import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoriaMinimal } from '../../categoria/categoria-minimal.model';
import { CategoriaService } from '../../categoria/categoria.service';


@Component({
  selector: 'app-categoria-pag',
  templateUrl: './categoria-pag.component.html',
  styleUrls: ['./categoria-pag.component.scss']
})
export class CategoriaPagComponent implements OnInit {

  categoriasMinimal: CategoriaMinimal[]=[];

  display = "none";
  categoriaAEliminar?:number = 0;
  error:boolean=false;
  success:boolean=false;
  mensaje:String="";

  page:number=0;
  size:number=5;
  sort:string="id,asc"
  orden: boolean=true; // true= ascendente, false= descendenten
  nombreColumna = "id";

  first:boolean=false;
  last:boolean=false;
  totalPages:number=0;
  totalElements:number=0;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {

    this.cargardatos(this.page,this.size,this.sort);
  }

  cargardatos(page:number,size:number,sort:string){
    
    this.categoriaService.obtenerCategoriasMinimalPag(page,size,sort).subscribe(

      datos=>{
        this.categoriasMinimal=datos.content;
        console.log(datos.content);
        this.first = datos.first;
        this.last = datos.last;
        this.totalPages = datos.totalPages;
        this.totalElements = datos.totalElements;
              
      }
    )
  }

  navegarSiguiente(){
    this.page = this.page+1; // o this.page+=1 (Es la misma expresion)
    this.cargardatos(this.page,this.size,this.sort)
  }

  navegarAnterior(){
    this.page = this.page-1; // o this.page+=1 (Es la misma expresion)
    this.cargardatos(this.page,this.size,this.sort)
  }

  cambiarSort(nombre:string){
    this.nombreColumna = nombre;
    this.orden = !this.orden;
    this.sort = `${nombre},${this.miOrden(this.orden)}`;
    this.cargardatos(this.page,this.size,this.sort);

  }

    miOrden(orden:boolean): string{
      if (orden) {
          return 'asc'
      } else {
          return 'desc'
      }
    }


    // this.sort=`${nombre},${this.orden ? 'asc' : 'desc'}`; // METODO 2 -->         if(this.order) return 'asc' else return 'desc'
    // this.cargardatos(this.page,this.size,this.sort)       //                      this.sort=`${nombre},${this.orden}`;template-strings puedes llamar a funciones dentro del template ${this.miorden(this.orden)}
    //                                                       //                      this.cargardatos(this.page,this.size,this.sort)

  
  

  obtenerMiClase(nombreColumna:string): string{

    if(nombreColumna === this.nombreColumna){
        return `orden-${this.miOrden(this.orden)}`
    }
    
    else{
        return 'orden-columna';
      }
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
          this.mensaje="Se produjo un error al borrar la poción Error -> " + err.status;
          this.cerrarModal();
          console.log(err)         
        }    
    );
     
  }


  cerrarModal(){
    this.display="none";

  }

}
