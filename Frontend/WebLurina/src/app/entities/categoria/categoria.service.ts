import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, tipo_de_categoria } from './categoria.model';
import { Observable } from 'rxjs';
import { CategoriaMinimal } from './categoria-minimal.model';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public obtenerCategorias(): Observable<Categoria[]>{
    const url = 'http://localhost:8080/api/categorias'
    return this.http.get<Categoria[]>(url);
  }

  public obtenerCategoriasMinimal(): Observable<CategoriaMinimal[]>{
    const url = 'http://localhost:8080/api/categorias-min'
    return this.http.get<CategoriaMinimal[]>(url);
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

  public eliminarCategoria(categoriaId?:number): Observable<void> {
    const url = 'http://localhost:8080/api/categorias/' + categoriaId;
    return this.http.delete<void>(url);
  }

  public obtenerCategoriasMinimalPag(page:number,size:number,sort:string):Observable<any> {
    const params = `?page=${page}&size=${size}&sort=${sort}`;
    const url = 'http://localhost:8080/api/Categorias-min-pag' + params;
    return this.http.get<any>(url);
  }



  // public obtenerpociones():Potion[]{

  //   const pociones:Potion[]=[];
  
  //   const pocion01:Potion = new Potion(1,"Pocion de vida menor",        "incrementa la vida en 25pt",                   "../../assets/imgs/pocima_roja.PNG",          tipo_de_pocion.VIDA,      false)
  //   const pocion02:Potion = new Potion(2,"Pocion de vida mayor",        "incrementa la vida en 50pt",                   "../../assets/imgs/pocima_violeta.PNG",       tipo_de_pocion.VIDA,      false)  
    
  //   const pocion03:Potion = new Potion(3,"Pocion de mana menor",        "incrementa el mana en 25pt",                   "../../../../assets/imgs/pocima_roja.PNG",    tipo_de_pocion.MANA,      true)
  //   const pocion04:Potion = new Potion(4,"Pocion de mana mayor",        "incrementa el mana en 50pt",                   "../../../../assets/imgs/pocima_roja.PNG",    tipo_de_pocion.MANA,      false)
    
  //   const pocion05:Potion = new Potion(5,"Pocion de energia menor",     "incrementa la energia en 25pt",                "../../assets/imgs/pocima_roja.PNG",          tipo_de_pocion.ENERGIA,   true)
  //   const pocion06:Potion = new Potion(6,"Pocion de energia mayorr",    "incrementa la energia en 50pt",                "../../assets/imgs/pocima_roja.PNG",          tipo_de_pocion.ENERGIA,   false)
    
  //   pociones.push(pocion01);
  //   pociones.push(pocion02);
  //   pociones.push(pocion03);
  //   pociones.push(pocion04);
  //   pociones.push(pocion05);
  //   pociones.push(pocion06);



  //   return pociones;
  //   console.log(pociones);
  
  // }

public obtenerCategorias_filtrada(id:number):Categoria[]{

    const pociones:Categoria[]=[];
    let pociones_filtrada:Categoria[]=[];
    
  
    const pocion01:Categoria = new Categoria(1,"Pocion de vida menor",        "incrementa la vida en 25pt",    "../../assets/imgs/pocima_roja.PNG",          tipo_de_categoria.VIDA,      false)
    const pocion02:Categoria = new Categoria(2,"Pocion de vida mayor",        "incrementa la vida en 50pt",    "../../assets/imgs/pocima_violeta.PNG",       tipo_de_categoria.VIDA,      false)  
    
    const pocion03:Categoria = new Categoria(3,"Pocion de mana menor",        "incrementa el mana en 25pt",    "../../../../assets/imgs/pocima_roja.PNG",    tipo_de_categoria.MANA,      true)
    const pocion04:Categoria = new Categoria(4,"Pocion de mana mayor",        "incrementa el mana en 50pt",    "../../../../assets/imgs/pocima_roja.PNG",    tipo_de_categoria.MANA,      false)
    
    const pocion05:Categoria = new Categoria(5,"Pocion de energia menor",     "incrementa la energia en 25pt", "../../assets/imgs/pocima_roja.PNG",          tipo_de_categoria.ENERGIA,   true)
    const pocion06:Categoria = new Categoria(6,"Pocion de energia mayorr",    "incrementa la energia en 50pt", "../../assets/imgs/pocima_roja.PNG",          tipo_de_categoria.ENERGIA,   false)
    
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
