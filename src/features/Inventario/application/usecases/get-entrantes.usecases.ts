import { IngredienteDto } from "../../domain/model/dtos/ingrediente.dto";
import { IngredienteRepository } from "../../infrastructure/drivens/models/ingrediente-repository";
import { EntrantesRepositoryPort } from "../../infrastructure/drivens/ports/entrantes-repository.port";
import { IngredienteFactoryService } from "../services/ingrediente-factory.service";

export class GetEntrantesUseCase {
    constructor(private entranteRepository: EntrantesRepositoryPort) { }

    async execute(): Promise<IngredienteDto[]> {
        
        const ingredientes = (await this.entranteRepository?.getIngredientes())?.map(
            (ingredienteFromRepositorytemp: IngredienteRepository) => IngredienteFactoryService.createIngredienteDTOFromRepositoryEntity(ingredienteFromRepositorytemp));
        return ingredientes;
    }

}