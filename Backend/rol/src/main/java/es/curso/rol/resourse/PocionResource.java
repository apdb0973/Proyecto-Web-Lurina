package es.curso.rol.resourse;
import es.curso.rol.service.IPocionService;
import es.curso.rol.service.dto.PocionDTO;
import es.curso.rol.service.dto.PocionDTOmin;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PocionResource{

    private IPocionService pocionService;
    public PocionResource(IPocionService pocionService){
        this.pocionService= pocionService;
    }
    @CrossOrigin()
    @GetMapping("/categorias")
    public List<PocionDTO> obtenerListaPociones() {
        List<PocionDTO> pociones = new ArrayList<PocionDTO>();
        pociones = pocionService.obtenerTodas();
        return pociones;
    }
    @CrossOrigin()
    @GetMapping("/categorias-min")
    public List<PocionDTOmin> obtenerListaPocionesmin() {
        List<PocionDTOmin> pociones = new ArrayList<PocionDTOmin>();
        pociones = pocionService.obtenerTodasmin();
        return pociones;
    }
    @CrossOrigin()
    @PostMapping("/categorias")
    public PocionDTO crearPocion(@RequestBody PocionDTO pocionDTO) {

        return pocionService.guardar(pocionDTO);
    }
    @CrossOrigin()
    @PutMapping("/categorias")
    public PocionDTO modificarPocion(@RequestBody PocionDTO pocionDTO) {
        return pocionService.guardar(pocionDTO);

    }
    @CrossOrigin()
    @GetMapping("/categorias/{id}")
    public PocionDTO obtenerPocion(@PathVariable Long id) {
        return pocionService.obtenerPocion(id);
    }
    @CrossOrigin()
    @DeleteMapping("/categorias/{id}")
    public void borrarPocion(@PathVariable Long id){
        pocionService.borrar(id);

    }
}