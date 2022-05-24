package es.curso.rol.service;



import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.ItemDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IItemServicio {

    public List<ItemDTO>        ObtenerTodasItem();
    public ItemDTO              GuardarItem(ItemDTO itemDTO);
    public ItemDTO              ObtenerItem(Long id);
    public void                 BorrarItem(Long id);
}
