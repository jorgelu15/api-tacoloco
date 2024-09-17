import { IngredienteApi } from "../../drivers/models/ingrediente-api.model";
import { IngredienteRepository } from "../models/ingrediente-repository";

export interface IngredienteRepositoryPort {
    getIngredientes(): Promise<IngredienteRepository[]>;
    getIngredienteById(id: number): Promise<IngredienteRepository>;
    initialize(): Promise<void>;
}