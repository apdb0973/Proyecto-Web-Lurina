package es.curso.rol.service;



import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.UsuarioDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IUsuarioServicio {

    public List<UsuarioDTO>        ObtenerTodasUsuario();
    public UsuarioDTO              GuardarUsuario(UsuarioDTO usuarioDTO);
    public UsuarioDTO              ObtenerUsuario(Long id);
    public void                    BorrarUsuario(Long id);
}
