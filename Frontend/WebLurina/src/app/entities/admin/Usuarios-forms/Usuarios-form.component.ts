import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, tipo_de_usuario } from '../../Usuarios/Usuario.model';
import { UsuarioService } from '../../Usuarios/Usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './Usuarios-form.component.html',
  styleUrls: ['./Usuarios-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  usuario:Usuario={}; // o new Usuario()
  modoCreacion: boolean=true;
  error:boolean = false;
  mensaje:string = "";
  success:boolean = false;

  IdUsuario:number=0;

  constructor(protected route: ActivatedRoute, private servicioCategorias:UsuarioService, private router: Router) { }

  
  ngOnInit(): void {

    if (this.route.snapshot.params['usuarioid']) {
          this.modoCreacion=false;
          this.IdUsuario = +this.route.snapshot.params['usuarioid']
          this.servicioCategorias.obtenerUsuario(this.IdUsuario).subscribe
          
          (

            (datos:Usuario)=> {
                                this.usuario = datos;  //aqui es donde se recogen los datos que vienen del backend para ponerlos en el frontend

                             },

            (err)=>{  
                        
                        this.error=true;
                        this.mensaje="Se produjo un error  -> " + err.message;
                   }

          );

    }else {

      this.modoCreacion = true;
      this.usuario = new Usuario();

    }
  }

  
  Guardar(){

    this.error=false;
    this.success=false;
    this.mensaje="";

    if(this.modoCreacion)
    {

      this.servicioCategorias.insertarUsuario(this.usuario).subscribe
    
      (
      
        (datos:Usuario)=>{
                          console.log(datos);
                          this.success = true; 
                          this.mensaje = "Se ha guardado una usuario con ID -> " + datos.id;
                          this.usuario = new Usuario(); //limpiamos el objeto pocion del frontend despues de que se haya guardado
                        },
        
        (err)=>{  
                console.log(err);
                this.error=true;
                this.mensaje="Se produjo un error al guardar la categoria Error -> " + err.error;
                
               }

      );

    } else
      {
      this.servicioCategorias.editarUsuario(this.usuario).subscribe
      (
        (data: Usuario) => {
                            this.router.navigate(['/admin/usuarios']);
                          },
                
        (err)=>  {
                    this.error = true;
                    this.mensaje="Se produjo un error al guardar la categoria Error -> " + err.error;         
                  }

    
      )
    
    
      } 

    
  }
}
