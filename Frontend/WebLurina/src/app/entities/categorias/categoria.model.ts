export enum tipo_de_categoria { VIDA, MANA, ENERGIA}


export class Categoria {

id?:          number; 
titulo?:       string;
categoria?:   string;
imagen?:      string;
imagenTipo?:  string;

    constructor(id?:number, titulo?:string, categoria?:string, imagen?:string, imagenTipo?:string){

        this.id=id;
        this.titulo=titulo;
        this.categoria=categoria;
        this.imagen=imagen;
        this.imagenTipo=imagenTipo;
        
    }

}