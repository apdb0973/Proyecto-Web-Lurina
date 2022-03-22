export enum tipo_de_categoria { VIDA, MANA, ENERGIA}


export class CategoriaMinimal {

id?:number;
nombre?:string;
urlimagen?:string;
esEpica?: boolean;

    constructor(id?:number, nombre?:string, urlimagen?:string, esEpica?:boolean){

        this.id=id;
        this.nombre=nombre;
        this.urlimagen=urlimagen;
        this.esEpica=esEpica;
    }

}