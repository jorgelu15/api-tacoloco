import { Ingrediente } from "../../domain/model/entities/ingrediente.entity";
import { IngredienteRepository } from "../../infrastructure/drivens/models/ingrediente-repository";
import { IngredienteRepositoryPort } from "../../infrastructure/drivens/ports/ingrediente-repository.port"
import { IngredienteFactoryService } from "../services/ingrediente-factory.service";

export class GetIngredientesByIdUseCase {
    constructor(private ingredienteRepository: IngredienteRepositoryPort) { }

    async execute(id: number): Promise<Ingrediente> {
        const ingredientes = IngredienteFactoryService.createIngredienteFromRepositoryEntity((await this.ingredienteRepository?.getIngredienteById(id)));
        return ingredientes;
    }
}