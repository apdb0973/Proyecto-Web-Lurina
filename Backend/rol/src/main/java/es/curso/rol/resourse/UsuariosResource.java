package es.curso.rol.resourse;
import es.curso.rol.service.ICategoriaServicio;
import es.curso.rol.service.IUsuarioServicio;
import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.UsuarioDTO;
import es.curso.rol.service.impl.UsuarioServicio;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UsuariosResource {
        private IUsuarioServicio UsuarioServicio;

        public UsuariosResource(IUsuarioServicio UsuarioServicio) {
            this.UsuarioServicio = UsuarioServicio;
        }

        @CrossOrigin()
        @GetMapping("/usuarios")
        public List<UsuarioDTO> obtenerListaUsuario() {
            List<UsuarioDTO> usuarios = new ArrayList<UsuarioDTO>();
            usuarios = UsuarioServicio.ObtenerTodasUsuario();
            return usuarios;
        }

        @CrossOrigin()
        @PostMapping("/usuarios")
        public UsuarioDTO CrearUsuario(@RequestBody UsuarioDTO usuarioDTO) {
            return UsuarioServicio.GuardarUsuario(usuarioDTO);
        }

        @CrossOrigin()
        @PutMapping("/usuarios")
        public UsuarioDTO ModificarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
            return UsuarioServicio.GuardarUsuario(usuarioDTO);
        }

        @CrossOrigin()
        @GetMapping("/usuarios/{id}")
        public UsuarioDTO ObtenerUsuario(@PathVariable Long id) {
            return UsuarioServicio.ObtenerUsuario(id);
        }

        @CrossOrigin()
        @DeleteMapping("/usuarios/{id}")
        public void BorrarUsuario(@PathVariable Long id) {
            UsuarioServicio.BorrarUsuario(id);
        }
    }