package es.curso.rol.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "categoria")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "categoria")
    private String categoria;

    @Lob
    @Column(name = "imagen")
    private byte[]  imagen;

    @Column(name = "imagenTipo")
    private String imagenTipo;


    }


