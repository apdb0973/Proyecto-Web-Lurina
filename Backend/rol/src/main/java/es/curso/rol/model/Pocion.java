package es.curso.rol.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "pocion")
public class Pocion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "urlimagen")
    private String urlimagen;

    @Column(name = "t_categoria")
    private String t_categoria;

    @Column(name = "esEpica")
    private Boolean esEpica;

    }


