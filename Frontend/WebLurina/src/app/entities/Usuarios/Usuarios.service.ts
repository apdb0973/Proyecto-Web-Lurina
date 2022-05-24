import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, tipo_de_usuario } from './Usuario.model';
import { Observable } from 'rxjs';

import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public obtenerUsuarios(): Observable<Usuario[]>{
    const url = 'http://localhost:8080/api/usuarios'
    return this.http.get<Usuario[]>(url);
  }

  
  public insertarUsuario(usuario:Usuario): Observable<Usuario>{
    const url = 'http://localhost:8080/api/usuarios'
    return this.http.post(url,usuario);
  }

  public obtenerUsuario(usuarioId:number): Observable<Usuario>{
    console.log(usuarioId);
    const url = 'http://localhost:8080/api/usuarios/' + usuarioId;
    return this.http.get<Usuario>(url);
  }

  public editarUsuario(usuario:Usuario): Observable<Usuario>{
    const url = 'http://localhost:8080/api/usuarios'
    return this.http.put(url,usuario);
  }

  public eliminarUsuario(usuarioId?:number): Observable<void> {
    const url = 'http://localhost:8080/api/usuarios/' + usuarioId;
    return this.http.delete<void>(url);
  }

  public obtenerUsuariosPag(page:number,size:number,sort:string):Observable<any> {
    const params = `?page=${page}&size=${size}&sort=${sort}`;
    const url = 'http://localhost:8080/api/Usuarios-min-pag' + params;
    return this.http.get<any>(url);
  }


public obtenerUsuarios_filtrada(id:number):Usuario[]{

    const usuarios:Usuario[]=[];
    let usuarios_filtrada:Usuario[]=[];
    
  
    const usuario01:Usuario = new Usuario(1,"","","","","","","","","","",true,true,"","","","","","","")
    const usuario02:Usuario = new Usuario(1,"","","","","","","","","","",true,true,"","","","","","","")  
    const usuario03:Usuario = new Usuario(1,"","","","","","","","","","",true,true,"","","","","","","")
    const usuario04:Usuario = new Usuario(1,"","","","","","","","","","",true,true,"","","","","","","")
    const usuario05:Usuario = new Usuario(1,"","","","","","","","","","",true,true,"","","","","","","")
    const usuario06:Usuario = new Usuario(1,"","","","","","","","","","",true,true,"","","","","","","")
    
    usuarios.push(usuario01);
    usuarios.push(usuario02);
    usuarios.push(usuario03);
    usuarios.push(usuario04);
    usuarios.push(usuario05);
    usuarios.push(usuario06);

   usuarios_filtrada=usuarios.filter(variable => variable.id == id)
    console.log(usuarios_filtrada)
    return usuarios_filtrada;
    
  
  }


}
