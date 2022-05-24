import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, tipo_de_categoria } from './categoria.model';
import { Observable } from 'rxjs';

import { JsonPipe } from '@angular/common';
import { CategoriaFiltro } from './categoriaFiltro.model';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  
  public obtenerCategorias(): Observable<Categoria[]> {

    const urlEndPoint = 'http://localhost:8080/api/categorias';

    return this.http.get<Categoria[]>(urlEndPoint);

  }
 
  public insertarCategoria(categoria:Categoria): Observable<Categoria>{
    const url = 'http://localhost:8080/api/categorias'
    return this.http.post(url,categoria);
  }

  public obtenerCategoria(categoriaId:number): Observable<Categoria>{
    console.log(categoriaId);
    const url = 'http://localhost:8080/api/categorias/' + categoriaId;
    return this.http.get<Categoria>(url);
  }

  public editarCategoria(categoria:Categoria): Observable<Categoria>{
    const url = 'http://localhost:8080/api/categorias'
    return this.http.put(url,categoria);
  }

    public eliminarCategoria(id?: number): Observable<any> {

    const urlEndPoint = 'http://localhost:8080/api/categorias/' + id;

    return this.http.delete(urlEndPoint);

  }

  public obtenerCategoriasPag(page: number, size: number, sort: string, filtros: CategoriaFiltro[]): Observable<Categoria[]> {

    const paramPageable = "?page=" + page + "&size=" + size + "&sort=" + sort;
    const urlEndPoint = 'http://localhost:8080/api/categorias-pag-spec' + paramPageable;

    return this.http.post<Categoria[]>(urlEndPoint, filtros);

  }



public obtenerCategorias_filtrada(id:number):Categoria[]{

    const pociones:Categoria[]=[];
    let pociones_filtrada:Categoria[]=[];
    
  
    const pocion01:Categoria = new Categoria(1,"Bisuteria",  "colgantes")
    const pocion02:Categoria = new Categoria(2,"Bisuteria",  "Sarcillo")  
    
    const pocion03:Categoria = new Categoria(3,"Bisuteria",  "Anillo")
    const pocion04:Categoria = new Categoria(4,"Accesorios", "Bolso")
    
    const pocion05:Categoria = new Categoria(5,"Accesorios", "cinto")
    const pocion06:Categoria = new Categoria(6,"Accesorios", "Reloj")
    
    pociones.push(pocion01);
    pociones.push(pocion02);
    pociones.push(pocion03);
    pociones.push(pocion04);
    pociones.push(pocion05);
    pociones.push(pocion06);

   pociones_filtrada=pociones.filter(variable => variable.id == id)
    console.log(pociones_filtrada)
    return pociones_filtrada;
    
  
  }


}
