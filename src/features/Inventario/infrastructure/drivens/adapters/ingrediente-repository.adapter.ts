import { Ingrediente } from "../../../../../shared/sequelize/models/ingredientes.model";
import { IngredienteRepository } from "../models/ingrediente-repository";
import { IngredienteRepositoryPort } from "../ports/ingrediente-repository.port";

export class IngredienteRepositoryAdapter implements IngredienteRepositoryPort {

    private ingredientesRepository: IngredienteRepository[] = [];
    constructor() {
        this.initialize();
    }

    async getIngredientes(): Promise<IngredienteRepository[]> {
        return Promise.resolve(this.ingredientesRepository);
    } 

    async getIngredienteById(id: number): Promise<IngredienteRepository> {
        const ingrediente = this.ingredientesRepository.find((ingrediente: IngredienteRepository) => ingrediente.id === id)
        if (!ingrediente) {
            throw new Error("No existe el ingrediente buscado");
        }

        return Promise.resolve(ingrediente);
    }

    async initialize() {
        try {
            const ingredientes = await Ingrediente.findAll();
            this.ingredientesRepository = ingredientes.map((ingrediente) => ingrediente.toJSON());
        } catch (err) {
            console.error('Error al obtener ingredientes:', err);
            this.ingredientesRepository = []; // O manejar el error de otra manera
        }
    }
}