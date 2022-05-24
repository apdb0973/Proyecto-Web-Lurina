package es.curso.rol.repository;

import es.curso.rol.model.Categoria;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@SuppressWarnings("unused")
@Repository
public interface ICategoriaRepository extends   JpaRepository<Categoria,Long>,
                                                JpaSpecificationExecutor<Categoria> {

    Page<Categoria> findAll(Pageable pageable);
    Page<Categoria> findAll(Specification<Categoria> specCategoria, Pageable pageable);
}

