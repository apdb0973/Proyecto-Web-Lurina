package es.curso.rol.service.dto;

import lombok.Data;

import javax.persistence.Column;


@Data
public class ItemDTO {
    private Long    id;
    private String  categoria;
    private String  articulo;
    private String  descripcion;
    private Double    precio;
    private Long    unidades;
    private Long    rebajado;
    private Boolean favorito;
    private byte[]  imagen;
    private String imagenTipo;
}