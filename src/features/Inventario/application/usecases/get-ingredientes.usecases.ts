import { Ingrediente } from "../../domain/model/entities/ingrediente.entity";
import { IngredienteRepository } from "../../infrastructure/drivens/models/ingrediente-repository";
import { IngredienteRepositoryPort } from "../../infrastructure/drivens/ports/ingrediente-repository.port"
import { IngredienteFactoryService } from "../services/ingrediente-factory.service";

export class GetIngredientesUseCase {
    constructor(private ingredienteRepository: IngredienteRepositoryPort) { }

    async execute(): Promise<Ingrediente[]> {
        const ingredientes = (await this.ingredienteRepository?.getIngredientes())?.map(
            (ingredienteFromRepositorytemp: IngredienteRepository) => IngredienteFactoryService.createIngredienteFromRepositoryEntity(ingredienteFromRepositorytemp));
        return ingredientes;
    }
}