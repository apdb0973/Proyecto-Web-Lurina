import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Categoria } from '../../categorias/categoria.model';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  categoria:Categoria={}; // o new Potion()
  modoCreacion: boolean=true;
  error:boolean = false;
  mensaje:string = "";
  success:boolean = false;

  IdCategoria:number=0;

  constructor(protected route: ActivatedRoute, private servicioCategorias:CategoriaService, private router: Router) { }

  
  ngOnInit(): void {

    if (this.route.snapshot.params['categoriaid']) {
          this.modoCreacion=false;
          this.IdCategoria = +this.route.snapshot.params['categoriaid']
          this.servicioCategorias.obtenerCategoria(this.IdCategoria).subscribe
          
          (

            (datos:Categoria)=> {
                                this.categoria = datos;  //aqui es donde se recogen los datos que vienen del backend para ponerlos en el frontend

                             },

            (err)=>{  
                        
                        this.error=true;
                        this.mensaje="Se produjo un error  -> " + err.message;
                   }

          );

    }else {

      this.modoCreacion = true;
      this.categoria = new Categoria();

    }
  }

  
  Guardar(){

    this.error=false;
    this.success=false;
    this.mensaje="";

    if(this.modoCreacion)
    {

      this.servicioCategorias.insertarCategoria(this.categoria).subscribe
    
      (
      
        (datos:Categoria)=>{
                          console.log(datos);
                          this.success = true; 
                          this.mensaje = "Se ha guardado una categoria con ID -> " + datos.id;
                          this.categoria = new Categoria(); //limpiamos el objeto categoria del frontend despues de que se haya guardado
                        },
        
        (err)=>{  
                console.log(err);
                this.error=true;
                this.mensaje="Se produjo un error al guardar la categoria Error -> " + err.error;
                
               }

      );

    } else
      {
      this.servicioCategorias.editarCategoria(this.categoria).subscribe
      (
        (data: Categoria) => {
                            this.router.navigate(['/admin/categorias']);
                          },
                
        (err)=>  {
                    this.error = true;
                    this.mensaje="Se produjo un error al guardar la categoria Error -> " + err.error;         
                  }

    
      )
    
    
      } 

    
  }

  existeImagen(): boolean {
    let existe: boolean = false;
    if (this.categoria.imagenTipo && this.categoria.imagen) {
      existe = true;
    }
    return existe;
  }

  incluirImagenEnObjeto(event: any) {
    const inputFile = event.target as HTMLInputElement;

    const file: File | null = inputFile.files?.item(0) ?? null;
    

    this.leerFicheroComoString(file).then(
      (result) => {
        const tipoImagen: string = this.obtenerTipoImagen(result);
        console.log(tipoImagen);
        const base64Imagen: string = this.obtenerBase64Imagen(result);
        console.log(base64Imagen);
        
        this.categoria.imagenTipo = tipoImagen;
        this.categoria.imagen = base64Imagen;
      },
      (error) => {
        console.log("No se pudo cargar la imagen")
      }
    )
  }

  private leerFicheroComoString(file: File | null) {
    return new Promise<string>(function(resolve, reject) {
      let reader = new FileReader()
      reader.readAsDataURL(file!)
      reader.onload = function() {
          resolve(this.result as string)
          }
      })
  }

  private obtenerTipoImagen(base64Imagen: string): string {
    const partesBase64: string[] = base64Imagen.split(",");
    if (partesBase64.length !== 2) {
      throwError("No es un fichero correcto")
    }
    return partesBase64[0];
  }
  private obtenerBase64Imagen(base64Imagen: string): string {
    const partesBase64: string[] = base64Imagen.split(",");
    if (partesBase64.length !== 2) {
      throwError("No es un fichero correcto")
    }
    return partesBase64[1];
  }



}
