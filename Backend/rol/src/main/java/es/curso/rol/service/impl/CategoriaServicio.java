package es.curso.rol.service.impl;
import es.curso.rol.model.Item;
import es.curso.rol.repository.ICategoriaRepository;
import es.curso.rol.repository.IItemRepository;
import es.curso.rol.repository.IUsuarioRepository;
import es.curso.rol.model.Categoria;
import es.curso.rol.repository.specs.CategoriaSpecification;
import es.curso.rol.repository.specs.SearchCriteria;
import es.curso.rol.service.ICategoriaServicio;
import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.ItemDTO;
import es.curso.rol.service.mapper.ModelMapperUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaServicio implements ICategoriaServicio {
    private ICategoriaRepository CategoriaRepositorio;

    //Contructor
    public CategoriaServicio(ICategoriaRepository categoriaRepository) {
        this.CategoriaRepositorio = categoriaRepository;
    }

    @Override
    public List<CategoriaDTO> ObtenerTodasCategorias() {
        List<Categoria> categorias = CategoriaRepositorio.findAll();
        return ModelMapperUtils.mapAll(categorias, CategoriaDTO.class);
    }

    @Override
    public CategoriaDTO GuardarCategoria(CategoriaDTO categoriaDTO) {
        Categoria categoriaEntidad = ModelMapperUtils.map(categoriaDTO, Categoria.class); //convertir categoria a una entidad
        categoriaEntidad = CategoriaRepositorio.save(categoriaEntidad);
        return ModelMapperUtils.map(categoriaEntidad, CategoriaDTO.class);
    }

    @Override
    public CategoriaDTO ObtenerCategoria(Long id) {
        Optional<Categoria> categoriaOptional = CategoriaRepositorio.findById(id);
        if (categoriaOptional.isPresent()) {
            return ModelMapperUtils.map(categoriaOptional.get(), CategoriaDTO.class);
        } else {
            return null;
        }
    }

    @Override
    public void BorrarCategoria(Long id) {

        Optional<Categoria> categoriaOptional = CategoriaRepositorio.findById(id);
        if (categoriaOptional.isPresent()) {
            CategoriaRepositorio.delete(categoriaOptional.get());
        } else {
            System.out.println("No existe la categoria con el id " + id);
        }

    }

    @Override
    public Page<CategoriaDTO> obtenerTodasPaginadoSpec(Pageable pageable, SearchCriteria[] criteriaList) {

        CategoriaSpecification specCategoria = new CategoriaSpecification();

        for (SearchCriteria criteria : criteriaList) {
            specCategoria.add(criteria);
        }
        Page<Categoria> categorias = CategoriaRepositorio.findAll(specCategoria, pageable);
        Page<CategoriaDTO> dtoPage = categorias.map(categoria -> ModelMapperUtils.map(categoria, CategoriaDTO.class));
        return dtoPage;
    }






}
//---------------------------------------------------------------------------------

