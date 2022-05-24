export enum tipo_de_usuario { VIDA, MANA, ENERGIA}


export class Usuario {

    id?:                            number;
    correoElectronico?:             string;
    tratamiento?:                   string;
    nombre?:                        string;
    contrasena?:                    string;
    fechaDeNacimiento?:             string;
    calle?:                         string;
    numero?:                        string;
    codigoPostal?:                  string;
    localidad?:                     string;
    pais?:                          string;
    direccionDeEntregaDiferente?:   boolean;
    declaracionProteccionDeDatos?:  boolean;
    nombre2?:                       string;
    apellidos2?:                    string;
    calle2?:                        string;
    numero2?:                       string;
    codigoostal2?:                  string;
    localidad2?:                    string;
    pais2?:                         string;

    constructor(id?:number,correoElectronico?:string,tratamiento?:string,nombre?:string,contrasena?:string,fechaDeNacimiento?:string,calle?:string,numero?:string,codigoPostal?:string,localidad?:string,pais?:string,direccionDeEntregaDiferente?:boolean,declaracionProteccionDeDatos?:boolean,nombre2?:string,apellidos2?:string,calle2?:string,numero2?:string,codigoostal2?:string,localidad2?:string,pais2?:string){

    this.id=                            id                              ;
    this.correoElectronico=             correoElectronico               ;
    this.tratamiento=                   tratamiento                     ;
    this.nombre=                        nombre                          ;
    this.contrasena=                    contrasena                      ;
    this.fechaDeNacimiento=             fechaDeNacimiento               ;
    this.calle=                         calle                           ;
    this.numero=                        numero                          ;
    this.codigoPostal=                  codigoPostal                    ;
    this.localidad=                     localidad                       ;
    this.pais=                          pais                            ;
    this.direccionDeEntregaDiferente=   direccionDeEntregaDiferente     ;
    this.declaracionProteccionDeDatos=  declaracionProteccionDeDatos    ;
    this.nombre2=                       nombre2                         ;
    this.apellidos2=                    apellidos2                      ;
    this.calle2=                        calle2                          ;
    this.numero2=                       numero2                         ;
    this.codigoostal2=                  codigoostal2                    ;
    this.localidad2=                    localidad2                      ;
    this.pais2=                         pais2                           ; 
        
    }

}