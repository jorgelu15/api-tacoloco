import { Application, Request, Response } from "express";
import { Routes } from "../../../../../shared/routes/routes";
import { EntrantesApiPort } from "../ports/entrantes-api.port";
import { EntranteApi } from "../models/entrante-api.model";
import { GetEntrantesUseCase } from "../../../application/usecases/get-entrantes.usecases";

export class IngredienteEntrantesApiAdapter extends Routes implements EntrantesApiPort {
    static readonly ENTRANTES_ROUTE: string = "entrantes";

    constructor(
        app: Application,
        private getEntrantesUseCase: GetEntrantesUseCase
    ) {
        super(IngredienteEntrantesApiAdapter.ENTRANTES_ROUTE);
        app.get(this.route, this.getEntrantes.bind(this));
    }


    public getEntrantes(req: Request, res: Response): void {
        this.getEntrantesUseCase.execute().then((ingredientes: Object[]) => {
            return res.json({ ingredientes });
        })
    }

    public saveEntrante(req: Request, res: Response): void {
        
    }

}