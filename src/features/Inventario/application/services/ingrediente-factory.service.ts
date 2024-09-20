import { Ingrediente } from "../../domain/model/entities/ingrediente.entity";
import { IngredienteRepository } from "../../infrastructure/drivens/models/ingrediente-repository";
import { IngredienteApi } from "../../infrastructure/drivers/models/ingrediente-api.model";

export class IngredienteFactoryService {

    static createIngredienteApiFromEntity(ingredienteRepository: Ingrediente): IngredienteApi {
        return new IngredienteApi(
            ingredienteRepository.getId(),
            ingredienteRepository.getNombre(),
            ingredienteRepository.getMedida(),
            ingredienteRepository.getCantidad(),
            ingredienteRepository.getCosto(),
            ingredienteRepository.getCategoria()
        );
    }

    static createIngredienteFromRepositoryEntity(ingredienteRepository: IngredienteRepository): Ingrediente {
        return new Ingrediente(
            ingredienteRepository.id,
            ingredienteRepository.nombre,
            ingredienteRepository.medida,
            ingredienteRepository.cantidad,
            ingredienteRepository.costo,
            ingredienteRepository.categoria
        );
    }

}