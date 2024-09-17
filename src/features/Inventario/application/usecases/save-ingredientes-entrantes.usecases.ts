import { IngredienteRepository } from "../../infrastructure/drivens/models/ingrediente-repository";
import { EntrantesRepositoryPort } from "../../infrastructure/drivens/ports/entrantes-repository.port";
export class SaveIngredientesEntrantesUseCase {
    constructor(private ingredienteRepository: EntrantesRepositoryPort) { }

    async execute(ingrediente: IngredienteRepository) {
    }
}