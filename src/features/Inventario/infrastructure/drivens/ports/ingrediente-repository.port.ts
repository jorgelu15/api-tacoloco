import { IngredienteRepository } from "../models/ingrediente-repository";

export interface IngredienteRepositoryPort {
    getIngredientes(): Promise<IngredienteRepository[]>;
    getIngredienteById(id: number): Promise<IngredienteRepository>;
}