import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, tipo_de_item } from './Item.model';
import { Observable } from 'rxjs';

import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(protected route: ActivatedRoute, private router: Router, private http: HttpClient) { }
 

  public obtenerItems(): Observable<Item[]>{
    const url = 'http://localhost:8080/api/items'
    return this.http.get<Item[]>(url);
  }

  
  public insertarItem(item:Item): Observable<Item>{
    const url = 'http://localhost:8080/api/items'
    return this.http.post(url,item);
  }

  public obtenerItem(itemId?:number): Observable<Item>{
    console.log(itemId);
    const url = 'http://localhost:8080/api/items/' + itemId;
    return this.http.get<Item>(url);
  }

  public editarItem(item:Item): Observable<Item>{
    console.log(item);
    const url = 'http://localhost:8080/api/items'
    return this.http.put(url,item);
  }

  public eliminarItem(itemId?:number): Observable<void> {
    const url = 'http://localhost:8080/api/items/' + itemId;
    return this.http.delete<void>(url);
  }

  public obtenerItemsPag(page:number,size:number,sort:string):Observable<any> {
    const params = `?page=${page}&size=${size}&sort=${sort}`;
    const url = 'http://localhost:8080/api/items-min-pag' + params;
    return this.http.get<any>(url);
  }

  public obtenerItems_filtrados(Items:Item[], cat:String):Item[]{

   
    let Items_filtrados:Item[]=[];
  console.log(cat);  
  console.log(Items);  
  
    Items_filtrados = Items.filter(variable => variable.categoria == cat);
   
    return Items_filtrados;
    
  
  }
  
  

}



















