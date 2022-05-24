package es.curso.rol.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "correoElectronico")
    private String correoElectronico;

    @Column(name = "tratamiento")
    private String tratamiento;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "fechaDeNacimiento")
    private String fechaDeNacimiento;

    @Column(name = "calle")
    private String calle;

    @Column(name = "numero")
    private String numero;

    @Column(name = "codigoPostal")
    private String codigoPostal;

    @Column(name = "localidad")
    private String localidad;

    @Column(name = "pais")
    private String pais;

    @Column(name = "direccionDeEntregaDiferente")
    private Boolean direccionDeEntregaDiferente;

    @Column(name = "declaracionProteccionDeDatos")
    private Boolean declaracionProteccionDeDatos;

    @Column(name = "nombre2")
    private String nombre2;

    @Column(name = "apellidos2")
    private String apellidos2;

    @Column(name = "calle2")
    private String calle2;

    @Column(name = "numero2")
    private String numero2;

    @Column(name = "codigoPostal2")
    private String codigopostal2;

    @Column(name = "localidad2")
    private String localidad2;

    @Column(name = "pais2")
    private String pais2;

    }


