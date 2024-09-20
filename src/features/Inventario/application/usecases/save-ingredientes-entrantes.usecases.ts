import { EntrantesRepositoryPort } from "../../infrastructure/drivens/ports/entrantes-repository.port";
export class SaveIngredientesEntrantesUseCase {
    constructor(private ingredienteRepository: EntrantesRepositoryPort) { }

    async execute(entrante: any) {
        this.ingredienteRepository.saveIngrediente(entrante);

        return 200;
    }
}