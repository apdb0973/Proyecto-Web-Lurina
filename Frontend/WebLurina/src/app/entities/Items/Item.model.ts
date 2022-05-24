export enum tipo_de_item { VIDA, MANA, ENERGIA}


export class Item {

id?:         number;
categoria?:  string;
articulo?:   string;
descripcion?:string;
precio?:     number;
unidades?:   number;
rebajado?:   number;
favorito?:   boolean;
imagen?:     string;
imagenTipo?:  string;

    constructor(id?:number, categoria?:string, articulo?:string, descripcion?:string, precio?:number, unidades?:number, rebajado?:number, favorito?:boolean, imagen?:string, imagenTipo?:string)
    {
        this.id=id;
        this.categoria=categoria;
        this.articulo=articulo;
        this.descripcion=descripcion;
        this.precio=precio;
        this.unidades=unidades;
        this.rebajado=rebajado;
        this.imagen=imagen;
        this.imagen=imagenTipo
    }

}