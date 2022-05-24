import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Item, tipo_de_item } from '../../Items/Item.model';
import { ItemService } from '../../Items/Item.service';

@Component({
  selector: 'app-items-form',
  templateUrl: './Items-form.component.html',
  styleUrls: ['./Items-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  item:Item={}; // o new Item()
  modoCreacion: boolean=true;
  error:boolean = false;
  mensaje:string = "";
  success:boolean = false;

  IdItem:number=0;

  constructor(protected route: ActivatedRoute, private servicioItems:ItemService, private router: Router) { }

  
  ngOnInit(): void {

    if (this.route.snapshot.params['itemid']) {
      
          this.modoCreacion=false;
          this.IdItem = +this.route.snapshot.params['itemid']
          this.servicioItems.obtenerItem(this.IdItem).subscribe
          
          (

            (datos:Item)=> {
                                this.item = datos;  //aqui es donde se recogen los datos que vienen del backend para ponerlos en el frontend

                             },

            (err)=>{  
                        
                        this.error=true;
                        this.mensaje="Se produjo un error  -> " + err.message;
                   }

          );

    }else {

      this.modoCreacion = true;
      this.item = new Item();

    }
  }

  
  Guardar(){

    this.error=false;
    this.success=false;
    this.mensaje="";

    if(this.modoCreacion)
    {

      this.servicioItems.insertarItem(this.item).subscribe
    
      (
      
        (datos:Item)=>{
                          console.log(datos);
                          this.success = true; 
                          this.mensaje = "Se ha guardado un Item con ID -> " + datos.id;
                          this.item = new Item(); //limpiamos el objeto Item del frontend despues de que se haya guardado
                        },
        
        (err)=>{  
                console.log(err);
                this.error=true;
                this.mensaje="Se produjo un error al guardar el item Error -> " + err.error;
                
               }

      );

    } else
      {
      this.servicioItems.editarItem(this.item).subscribe
      (
        (data: Item) => {
                            this.router.navigate(['/admin/items']);
                          },
                
        (err)=>  {
                    this.error = true;
                    this.mensaje="Se produjo un error al guardar el Item Error -> " + err.error;         
                  }

    
      )
    
    
      } 

    
  }

  existeImagen(): boolean {
    let existe: boolean = false;
    if (this.item.imagenTipo && this.item.imagen) {
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
        
        this.item.imagenTipo = tipoImagen;
        this.item.imagen = base64Imagen;
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
