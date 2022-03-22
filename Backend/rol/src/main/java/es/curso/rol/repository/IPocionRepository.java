package es.curso.rol.repository;

import es.curso.rol.model.Pocion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface IPocionRepository extends JpaRepository<Pocion,Long> {
}
