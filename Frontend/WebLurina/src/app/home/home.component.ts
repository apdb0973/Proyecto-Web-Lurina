import { Component, OnInit } from '@angular/core';
import { Categoria } from '../entities/categorias/categoria.model';
import { CategoriaService } from '../entities/categorias/categoria.service';
import { CategoriaFiltro } from '../entities/categorias/categoriaFiltro.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categorias:Categoria[]=[];

  page: number = 0;
  size: number = 1000;
  sort: string = "titulo,asc";

  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  filtros: CategoriaFiltro[] = [];
  filtroTitulo: string = "";
  filtroEsEpica: boolean = false;



  constructor(private servicio_categorias:CategoriaService ) { }

  ngOnInit(): void {

    this.cargardatos(this.page, this.size, this.sort);
  
  }

  // cargardatos(){
  //   console.log('Cargando...');
  //   this.servicio_categorias.obtenerCategorias().subscribe(respuesta=>{ console.log('Fin de la carga'); this.categorias=respuesta;});
  // }

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
