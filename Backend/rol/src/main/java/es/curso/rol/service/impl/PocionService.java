package es.curso.rol.service.impl;
import es.curso.rol.repository.IPocionRepository;
import es.curso.rol.model.Pocion;
import es.curso.rol.service.IPocionService;
import es.curso.rol.service.dto.PocionDTO;
import es.curso.rol.service.dto.PocionDTOmin;
import es.curso.rol.service.mapper.ModelMapperUtils;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PocionService implements IPocionService {
    private IPocionRepository pocionRepository;
    //Contructor
    public PocionService(IPocionRepository pocionRepository){
        this.pocionRepository=pocionRepository;
    }
    @Override
    public List<PocionDTO> obtenerTodas() {
        List<Pocion> pociones = pocionRepository.findAll();
        return ModelMapperUtils.mapAll(pociones, PocionDTO.class);
    }

    @Override
    public List<PocionDTOmin> obtenerTodasmin() {
        List<Pocion> pociones = pocionRepository.findAll();
        return ModelMapperUtils.mapAll(pociones, PocionDTOmin.class);
    }

    @Override
    public PocionDTO guardar(PocionDTO pocionDTO){
        Pocion pocionEntidad = ModelMapperUtils.map(pocionDTO, Pocion.class); //convertir pocion a una entidad
        pocionEntidad = pocionRepository.save(pocionEntidad);
        return ModelMapperUtils.map(pocionEntidad, PocionDTO.class);
    }
    @Override
    public  PocionDTO obtenerPocion(Long id){

       Optional<Pocion> pocionOptional = pocionRepository.findById(id);

       if(pocionOptional.isPresent()){
           return ModelMapperUtils.map(pocionOptional.get(), PocionDTO.class);
       } else {
           return null;
       }
    }
    @Override
    public void borrar(Long id){
        //METODO 1
        //Pocion pocion = pocionRepository.getById(id);
        //pocionRepository.delete(pocion);

        //METODO 2
        Optional<Pocion> pocionOptional = pocionRepository.findById(id);
        if (pocionOptional.isPresent()){
            pocionRepository.delete(pocionOptional.get());
        }else {
            System.out.println("No existe la pocion con el id " + id);
        }

    }

}
