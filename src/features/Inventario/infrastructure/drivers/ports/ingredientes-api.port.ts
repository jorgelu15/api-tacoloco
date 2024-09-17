import { Request, Response } from "express";

export interface IngredientesApiPort {
    getIngredientes(req: Request, res: Response): void;
    getIngredienteById(req: Request, res: Response): void;
}