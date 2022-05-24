package es.curso.rol.resourse;
import es.curso.rol.service.ICategoriaServicio;
import es.curso.rol.service.IItemServicio;
import es.curso.rol.service.dto.CategoriaDTO;

import es.curso.rol.service.dto.ItemDTO;
import es.curso.rol.service.dto.UsuarioDTO;
import es.curso.rol.service.impl.ItemServicio;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ItemsResource {
        private IItemServicio ItemServicio;

        public ItemsResource(IItemServicio ItemServicio) {
            this.ItemServicio = ItemServicio;
        }

        @CrossOrigin()
        @GetMapping("/items")
        public List<ItemDTO> obtenerListaItems() {
            List<ItemDTO> items = new ArrayList<ItemDTO>();
            items = ItemServicio.ObtenerTodasItem();
            return items;
        }

        @CrossOrigin()
        @PostMapping("/items")
        public ItemDTO CrearItem(@RequestBody ItemDTO itemDTO) {
            return ItemServicio.GuardarItem(itemDTO);
        }

        @CrossOrigin()
        @PutMapping("/items")
        public ItemDTO ModificarItem(@RequestBody ItemDTO itemDTO) {
            return ItemServicio.GuardarItem(itemDTO);
        }

        @CrossOrigin()
        @GetMapping("/items/{id}")
        public ItemDTO ObtenerItem(@PathVariable Long id) {
            return ItemServicio.ObtenerItem(id);
        }



    @CrossOrigin()
        @DeleteMapping("/items/{id}")
        public void BorrarItem(@PathVariable Long id) {
            ItemServicio.BorrarItem(id);
        }
    }