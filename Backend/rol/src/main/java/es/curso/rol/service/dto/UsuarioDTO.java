package es.curso.rol.service.dto;

import lombok.Data;

import javax.persistence.Column;


@Data
public class UsuarioDTO {

    private Long id;
    private String correoElectronico;
    private String tratamiento;
    private String nombre;
    private String contrasena;
    private String fechaDeNacimiento;
    private String calle;
    private String numero;
    private String codigoPostal;
    private String localidad;
    private String pais;
    private Boolean direccionDeEntregaDiferente;
    private Boolean declaracionProteccionDeDatos;
    private String nombre2;
    private String apellidos2;
    private String calle2;
    private String numero2;
    private String codigoostal2;
    private String localidad2;
    private String pais2;
}