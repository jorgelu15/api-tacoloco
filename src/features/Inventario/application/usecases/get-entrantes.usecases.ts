import { EntranteDto } from "../../domain/model/dtos/entrante.dto";
import { EntranteRepository } from "../../infrastructure/drivens/models/entrante-repository";
import { EntrantesRepositoryPort } from "../../infrastructure/drivens/ports/entrantes-repository.port";
import { EntranteFactoryService } from "../services/entrante-factory.service";

export class GetEntrantesUseCase {
    constructor(private entranteRepository: EntrantesRepositoryPort) { }

    async execute(): Promise<EntranteDto[]> {
        
        const ingredientes = (await this.entranteRepository.getIngredientes())?.map(
            (entranteFromRepositorytemp: EntranteRepository) => EntranteFactoryService.createEntranteFromRepositoryDto(entranteFromRepositorytemp));
        return ingredientes;
    }

}