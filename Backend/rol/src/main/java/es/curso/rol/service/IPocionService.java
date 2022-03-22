package es.curso.rol.service;



import es.curso.rol.service.dto.PocionDTO;
import es.curso.rol.service.dto.PocionDTOmin;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IPocionService {
    public List<PocionDTO> obtenerTodas();
    public List<PocionDTOmin> obtenerTodasmin();
    public PocionDTO guardar(PocionDTO pocionDTO);
    public PocionDTO obtenerPocion(Long id);
    public void borrar(Long id);
}
