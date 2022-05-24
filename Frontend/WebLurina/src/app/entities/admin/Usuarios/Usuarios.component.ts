import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Usuario, tipo_de_usuario } from '../../Usuarios/Usuario.model';
import { UsuarioService } from '../../Usuarios/Usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './Usuarios.component.html',
  styleUrls: ['./Usuarios.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[]=[];

  display = "none";
  usuarioAEliminar?:number = 0;
  error:boolean=false;
  success:boolean=false;
  mensaje:String="";

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.cargardatos();
  }

  cargardatos(){
    console.log('Cargando...');
    this.usuarioService.obtenerUsuarios().subscribe(respuesta=>{ console.log('Fin de la carga'); this.usuarios=respuesta;});
    
  }
  abrirModalEliminar(id?:number){
    console.log(id);
    this.display="block"
    this.usuarioAEliminar=id; // dato que viene del html y pasa a la variable usuarioAEliminar para luego pasarsela a la funcion eliminar.
    this.error=false;   //Refrescamos la pantalla eliminando cualquier mensaje residual
    this.success=false; //Refrescamos la pantalla eliminando cualquier mensaje residual
  }

  eliminar(id?:number){

    this.usuarioService.eliminarUsuario(id).subscribe                       // Ordeno al backend que elimine la Pocion
    (
       (respuest)=> 
       {                                                       // Si la elimina correctamente, procedo a refrescar la pantalla
         this.usuarioService.obtenerUsuarios().subscribe //Cargo la lista de nuevo para refrescar pantalla
         (
           respuesta=> 
           {                                                   //Si la carga correctamente.....  
            
             this.usuarios=respuesta;                   //vuelco la lista en el array PocionesMinimal.
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
          this.mensaje="Se produjo un error al borrar la usuario Error -> " + err.status;
          this.cerrarModal();
          console.log(err)         
        }    
    );
     
  }


  cerrarModal(){
    this.display="none";

  }

}
