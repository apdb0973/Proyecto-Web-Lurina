package es.curso.rol.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name = "item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "categoria")
    private String categoria;

    @Column(name = "articulo")
    private String articulo;

    @Column(name = "descripcion", length = 2500)
    @Size(max=2500)
    private String descripcion;

    @Column(name = "precio")
    @Positive
    private Double precio;

    @Column(name = "unidades")
    private Long unidades;

    @Column(name = "rebajado")
    private Long rebajado;

    @Column(name = "favorito")
    private Boolean favorito;

    @Lob
    @Column(name = "imagen")
    private byte[] imagen;

    @Column(name = "imagenTipo")
    private String imagenTipo;

}


