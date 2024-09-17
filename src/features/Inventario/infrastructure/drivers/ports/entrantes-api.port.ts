import { Request, Response } from "express";

export interface EntrantesApiPort {
    getEntrantes(req: Request, res: Response): void;
    saveEntrante(req: Request, res: Response): void;
}