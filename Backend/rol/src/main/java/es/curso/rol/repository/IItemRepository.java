package es.curso.rol.repository;


import es.curso.rol.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface IItemRepository extends JpaRepository<Item,Long> {}
