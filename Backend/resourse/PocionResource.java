package es.curso.rol.resourse;

import org.springframework.web.bind.annotation.*;
import es.curso.rol.model.Pocion;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PocionResource{

    @GetMapping("/pociones")
    public List<Pocion> getAllPociones() {

        List<Pocion> pociones = new ArrayList<Pocion>();

        pociones = inicializarPociones();
        return pociones;

    }

    private List<Pocion> inicializarPociones(){

        List<Pocion> pociones = new ArrayList<Pocion>();

        Pocion pocion01 = new Pocion(1,"Pocion de mana","Restaura 25pt de mana",false);
        pociones.add(pocion01);

        Pocion pocion02 = new Pocion(2,"Pocion de vida","Restaura 25pt de vida",false);
        pociones.add(pocion02);

        Pocion pocion03 = new Pocion(3,"Pocion de energia","Restaura 25pt de energia",false);
        pociones.add(pocion03);

        Pocion pocion04 = new Pocion(4,"Pocion de invisibilidad","Proporciona invisibilidad durante 5m",true);
        pociones.add(pocion04);

        Pocion pocion05 = new Pocion(5,"Pocion de Levitacion","Flotas en el aire durante 5m",true);
        pociones.add(pocion05);

        return pociones;

    }

}



