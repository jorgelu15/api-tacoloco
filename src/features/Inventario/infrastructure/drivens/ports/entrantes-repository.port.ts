import { IngredienteRepository } from "../models/ingrediente-repository";

export interface EntrantesRepositoryPort {
    getIngredientes(): Promise<IngredienteRepository[]>;
    getIngredienteById(id: number): Promise<IngredienteRepository>;
    saveIngrediente(ingrediente: IngredienteRepository): void;
    initialize(): Promise<void>;
}