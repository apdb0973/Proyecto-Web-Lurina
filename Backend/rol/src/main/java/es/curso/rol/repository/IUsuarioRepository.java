package es.curso.rol.repository;


import es.curso.rol.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario,Long> {}
