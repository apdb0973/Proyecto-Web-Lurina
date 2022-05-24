package es.curso.rol.service;



import es.curso.rol.repository.specs.SearchCriteria;
import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.ItemDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICategoriaServicio {
    public List<CategoriaDTO>   ObtenerTodasCategorias();
    public Page<CategoriaDTO>   obtenerTodasPaginadoSpec(Pageable pageable, SearchCriteria[] criteria);
    public CategoriaDTO         GuardarCategoria(CategoriaDTO categoriaDTO);
    public CategoriaDTO         ObtenerCategoria(Long id);
    public void                 BorrarCategoria(Long id);

}
