package es.curso.rol.service.impl;
import es.curso.rol.model.Item;
import es.curso.rol.model.Usuario;
import es.curso.rol.repository.ICategoriaRepository;
import es.curso.rol.repository.IItemRepository;
import es.curso.rol.repository.IUsuarioRepository;
import es.curso.rol.model.Categoria;
import es.curso.rol.service.ICategoriaServicio;
import es.curso.rol.service.IItemServicio;
import es.curso.rol.service.IUsuarioServicio;
import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.ItemDTO;
import es.curso.rol.service.dto.UsuarioDTO;
import es.curso.rol.service.mapper.ModelMapperUtils;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


//---------------------------------------------------------------------------------
@Service
public class UsuarioServicio implements IUsuarioServicio {

    private IUsuarioRepository UsuarioRepositorio;

    //Contructor
    public UsuarioServicio(IUsuarioRepository usuarioRepository) {
        this.UsuarioRepositorio = usuarioRepository;
    }

    @Override
    public List<UsuarioDTO> ObtenerTodasUsuario() {
        List<Usuario> usuarios = UsuarioRepositorio.findAll();
        return ModelMapperUtils.mapAll(usuarios, UsuarioDTO.class);
    }

    @Override
    public UsuarioDTO GuardarUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuarioEntidad = ModelMapperUtils.map(usuarioDTO, Usuario.class); //convertir categoria a una entidad
        usuarioEntidad = UsuarioRepositorio.save(usuarioEntidad);
        return ModelMapperUtils.map(usuarioEntidad, UsuarioDTO.class);
    }

    @Override
    public UsuarioDTO ObtenerUsuario(Long id) {
        Optional<Usuario> usuarioOptional = UsuarioRepositorio.findById(id);
        if (usuarioOptional.isPresent()) {
            return ModelMapperUtils.map(usuarioOptional.get(), UsuarioDTO.class);
        } else {
            return null;
        }
    }

    @Override
    public void BorrarUsuario(Long id) {

        Optional<Usuario> usuarioOptional = UsuarioRepositorio.findById(id);
        if (usuarioOptional.isPresent()) {
            UsuarioRepositorio.delete(usuarioOptional.get());
        } else {
            System.out.println("No existe el Usuario con el id " + id);
        }

    }

}
