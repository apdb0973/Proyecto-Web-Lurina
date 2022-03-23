package es.curso.rol.service.dto;

import lombok.Data;

@Data
public class PocionDTOmin {
    private Integer id;
    private String nombre;
    private String descripcion;
    private String urlimagen;
    private String t_categoria;
    private Boolean esEpica;
}
