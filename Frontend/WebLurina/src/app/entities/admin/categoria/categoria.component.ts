import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Categoria, tipo_de_categoria } from '../../categorias/categoria.model';
import { CategoriaService } from '../../categorias/categoria.service';
import { CategoriaFiltro } from '../../categorias/categoriaFiltro.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[]=[];

  display = "none";
  categoriaAEliminar?:number = 0;
  error:boolean=false;
  success:boolean=false;
  mensaje:String="";

  page: number = 0;
  size: number = 5;
  sort: string = "titulo,asc";

  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  filtros: CategoriaFiltro[] = [];
  filtroTitulo: string = "";
  


  

  constructor(private servicio_categorias: CategoriaService) { }

  ngOnInit(): void {

    this.cargardatos(this.page, this.size, this.sort);
  }

  
  cargardatos(page: number, size: number, sort: string) {

    this.servicio_categorias.obtenerCategoriasPag(page, size, sort, this.filtros).subscribe((data: any) => {
      this.categorias = data.content;
      this.first = data.first;
      this.last = data.last;
      this.totalElements = data.totalElements;
      this.totalPages = data.totalPages;
    });
  }


  abrirModalEliminar(id?:number){
    console.log(id);
    this.display="block"
    this.categoriaAEliminar=id; // dato que viene del html y pasa a la variable pocionAEliminar para luego pasarsela a la funcion eliminar.
    this.error=false;   //Refrescamos la pantalla eliminando cualquier mensaje residual
    this.success=false; //Refrescamos la pantalla eliminando cualquier mensaje residual
  }

  eliminar(Id?: number) {
     this.servicio_categorias.eliminarCategoria(Id).subscribe(
       (data: Categoria) => {
         this.servicio_categorias.obtenerCategorias().subscribe((data: Categoria[]) => {
           this.categorias = data;
         });
       }, 
       (err) => {
         this.mensaje = "Se produjo un error al borrar la categoria. Error: " + err;
         this.error = true;
     });

  }


  navegarAnterior() {
    this.page = this.page - 1;
    this.cargardatos(this.page, this.size, this.sort);
  }

  navegarSiguiente() {
    this.page = this.page + 1;
    this.cargardatos(this.page, this.size, this.sort);
  }


  buscar() {
    this.montarFiltros();
    this.cargardatos(this.page, this.size, this.sort);
  }

  montarFiltros() {

    this.filtros = [];

    if (this.filtroTitulo !== "") {
      let filTitulo: CategoriaFiltro = new CategoriaFiltro();
      filTitulo.key = "categoria";
      filTitulo.value = this.filtroTitulo;
      filTitulo.operation = "MATCH";
      this.filtros.push(filTitulo);

    }

  }













// ---------------------------------------------------------


  cerrarModal(){
    this.display="none";

  }

}
