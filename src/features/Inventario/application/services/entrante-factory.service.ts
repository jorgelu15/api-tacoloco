import { EntranteDto } from "../../domain/model/dtos/entrante.dto";
import { EntranteRepository } from "../../infrastructure/drivens/models/entrante-repository";

export class EntranteFactoryService{
    static createEntranteFromRepositoryDto(entranteRepository: EntranteRepository): EntranteDto {
        return new EntranteDto(
            entranteRepository.id,
            entranteRepository.fk_ingrediente,
            entranteRepository.cantidad,
            entranteRepository.fecha_entrante
        );
    }
}