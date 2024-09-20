import { EntranteRepository } from "../models/entrante-repository";

export interface EntrantesRepositoryPort {
    getIngredientes(): Promise<EntranteRepository[]>;
    getIngredienteById(id: number): Promise<EntranteRepository>;
    saveIngrediente(ingrediente: EntranteRepository): void;
}