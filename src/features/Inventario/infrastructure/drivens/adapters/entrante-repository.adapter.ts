import { Ingrediente } from "../../../../../shared/sequelize/models/ingredientes.model";
import { IngredienteDto } from "../models/dtos/ingrediente.dto";
import { IngredienteRepository } from "../models/ingrediente-repository";
import { EntrantesRepositoryPort } from "../ports/entrantes-repository.port";

export class EntranteRepositoryAdapter implements EntrantesRepositoryPort {

    private entrantesRepository: IngredienteRepository[] = [];
    constructor() {
        this.initialize();
    }

    async getIngredientes(): Promise<IngredienteRepository[]> {
        return Promise.resolve(this.entrantesRepository);
    }

    async getIngredienteById(id: number): Promise<IngredienteRepository> {
        const ingrediente = this.entrantesRepository.find((ingrediente: IngredienteRepository) => ingrediente.id === id);
        if (!ingrediente) {
            throw new Error('Ingrediente no encontrado');
        }

        return Promise.resolve(ingrediente);
    }

    async saveIngrediente(ingrediente: IngredienteRepository) {
        // this.entrantesRepository.push(ingrediente);
    }

    async initialize() {
        try {
            const ingredientes = await Ingrediente.findAll();
            this.entrantesRepository = ingredientes.map((ingrediente) => ingrediente.toJSON());
        } catch (err) {
            console.error('Error al obtener ingredientes:', err);
            this.entrantesRepository = []; // O manejar el error de otra manera
        }
    }
}