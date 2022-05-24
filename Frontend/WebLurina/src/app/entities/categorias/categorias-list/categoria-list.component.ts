import { Component, OnInit } from '@angular/core';
import { Categoria, tipo_de_categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import { CategoriaFiltro } from '../categoriaFiltro.model';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  title = " Pociones magicas mejoradas"

  categorias:Categoria[]=[];
  page: number = 0;
  size: number = 5;
  sort: string = "titulo,asc";

  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  filtros: CategoriaFiltro[] = [];
  filtroTitulo: string = "";
  filtroEsEpica: boolean = false;
  

    constructor(private servicio_categorias:CategoriaService) { }
  
    ngOnInit(): void {


      // this.serviciocategorias.obtenerCategorias().subscribe(resultado=>{this.Categorias = resultado});

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




}



