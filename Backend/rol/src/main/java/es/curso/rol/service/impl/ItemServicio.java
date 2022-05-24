package es.curso.rol.service.impl;
import es.curso.rol.model.Item;
import es.curso.rol.repository.ICategoriaRepository;
import es.curso.rol.repository.IItemRepository;
import es.curso.rol.repository.IUsuarioRepository;
import es.curso.rol.model.Categoria;
import es.curso.rol.service.ICategoriaServicio;
import es.curso.rol.service.IItemServicio;
import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.ItemDTO;
import es.curso.rol.service.mapper.ModelMapperUtils;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


//---------------------------------------------------------------------------------
@Service
public class ItemServicio implements IItemServicio {

    private IItemRepository ItemRepositorio;

    //Contructor
    public ItemServicio(IItemRepository itemRepository) {
        this.ItemRepositorio = itemRepository;
    }

    @Override
    public List<ItemDTO> ObtenerTodasItem() {
        List<Item> items = ItemRepositorio.findAll();
        return ModelMapperUtils.mapAll(items, ItemDTO.class);
    }

    @Override
    public ItemDTO GuardarItem(ItemDTO itemDTO) {
        Item itemEntidad = ModelMapperUtils.map(itemDTO, Item.class); //convertir categoria a una entidad
        itemEntidad = ItemRepositorio.save(itemEntidad);
        return ModelMapperUtils.map(itemEntidad, ItemDTO.class);
    }

    @Override
    public ItemDTO ObtenerItem(Long id) {
        Optional<Item> itemOptional = ItemRepositorio.findById(id);
        if (itemOptional.isPresent()) {
            return ModelMapperUtils.map(itemOptional.get(), ItemDTO.class);
        } else {
            return null;
        }
    }

    @Override
    public void BorrarItem(Long id) {

        Optional<Item> itemOptional = ItemRepositorio.findById(id);
        if (itemOptional.isPresent()) {
            ItemRepositorio.delete(itemOptional.get());
        } else {
            System.out.println("No existe el Item con el id " + id);
        }

    }

}
