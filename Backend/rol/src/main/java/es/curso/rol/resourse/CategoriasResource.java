package es.curso.rol.resourse;
import es.curso.rol.repository.specs.SearchCriteria;
import es.curso.rol.service.ICategoriaServicio;
import es.curso.rol.service.IItemServicio;
import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.ItemDTO;
import es.curso.rol.service.impl.ItemServicio;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoriasResource {

    private ICategoriaServicio CategoriaServicio;

    public CategoriasResource(ICategoriaServicio CategoriaServicio) {
        this.CategoriaServicio = CategoriaServicio;
    }

    @CrossOrigin()
    @GetMapping("/categorias")
    public List<CategoriaDTO> obtenerListaCategorias() {
        List<CategoriaDTO> categorias = new ArrayList<CategoriaDTO>();
        categorias = CategoriaServicio.ObtenerTodasCategorias();
        return categorias;
    }

    @CrossOrigin
    @PostMapping("/categorias-pag-spec")
    public Page<CategoriaDTO> getAllPocionesSpec(Pageable pageable, @RequestBody SearchCriteria[] criteria) {
        return CategoriaServicio.obtenerTodasPaginadoSpec(pageable, criteria);
    }

    @CrossOrigin()
    @PostMapping("/categorias")
    public CategoriaDTO CrearCategoria(@RequestBody CategoriaDTO categoriaDTO) {
        return CategoriaServicio.GuardarCategoria(categoriaDTO);
    }

    @CrossOrigin()
    @PutMapping("/categorias")
    public CategoriaDTO ModificarCategoria(@RequestBody CategoriaDTO categoriaDTO) {
        return CategoriaServicio.GuardarCategoria(categoriaDTO);
    }

    @CrossOrigin()
    @GetMapping("/categorias/{id}")
    public CategoriaDTO ObtenerCategoria(@PathVariable Long id) {
        return CategoriaServicio.ObtenerCategoria(id);
    }

    @CrossOrigin()
    @DeleteMapping("/categorias/{id}")
    public void BorrarCategoria(@PathVariable Long id) {
        CategoriaServicio.BorrarCategoria(id);
    }
}
