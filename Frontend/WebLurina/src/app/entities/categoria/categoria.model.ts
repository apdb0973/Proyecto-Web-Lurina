export enum tipo_de_categoria { VIDA, MANA, ENERGIA}


export class Categoria {

id?:number; 
nombre?:string;
descripcion?:string;
urlimagen?:string;
t_categoria?:tipo_de_categoria;
esEpica?: boolean;

    constructor(id?:number, nombre?:string, descripcion?:string, urlimagen?:string, t_categoria?:tipo_de_categoria, esEpica?:boolean){

        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.urlimagen=urlimagen;
        this.t_categoria=t_categoria;
        this.esEpica=esEpica;
    }

}