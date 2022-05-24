package es.curso.rol.service.dto;

import lombok.Data;

import javax.persistence.Column;


@Data
public class CategoriaDTO {
    private Long    id;
    private String  titulo;
    private String  categoria;
    private byte[]  imagen;
    private String  imagenTipo;

}
