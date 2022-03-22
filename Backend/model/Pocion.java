package es.curso.rol.model;

import lombok.Data;

@Data
public class Pocion {
    private Integer id;
    private String titulo;
    private String descripcion;
    private Boolean esEpica;

    public Pocion(Integer id, String titulo, String descripcion, Boolean esEpica){

        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.esEpica = esEpica;


    }

}
