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
    @GetMapping("/pociones")
    public List<PocionDTO> obtenerListaPociones() {
        List<PocionDTO> pociones = new ArrayList<PocionDTO>();
        pociones = pocionService.obtenerTodas();
        return pociones;
    }
    @CrossOrigin()
    @GetMapping("/pociones-min")
    public List<PocionDTOmin> obtenerListaPocionesmin() {
        List<PocionDTOmin> pociones = new ArrayList<PocionDTOmin>();
        pociones = pocionService.obtenerTodasmin();
        return pociones;
    }
    @CrossOrigin()
    @PostMapping("/pociones")
    public PocionDTO crearPocion(@RequestBody PocionDTO pocionDTO) {

        return pocionService.guardar(pocionDTO);
    }
    @CrossOrigin()
    @PutMapping("/pociones")
    public PocionDTO modificarPocion(@RequestBody PocionDTO pocionDTO) {
        return pocionService.guardar(pocionDTO);

    }
    @CrossOrigin()
    @GetMapping("/pociones/{id}")
    public PocionDTO obtenerPocion(@PathVariable Long id) {
        return pocionService.obtenerPocion(id);
    }
    @CrossOrigin()
    @DeleteMapping("/pociones/{id}")
    public void borrarPocion(@PathVariable Long id){
        pocionService.borrar(id);

    }
}