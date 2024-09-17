import { Application, Request, Response } from "express";
import { GetIngredientesUseCase } from "../../../application/usecases/get-ingredientes.usecases";
import { IngredientesApiPort } from "../ports/ingredientes-api.port";
import { Ingrediente } from "../../../domain/model/entities/ingrediente.entity";
import { Routes } from "../../../../../shared/routes/routes";
import { GetIngredientesByIdUseCase } from "../../../application/usecases/get-ingredientes-by-id.usescases";
import { GetEntrantesUseCase } from "../../../application/usecases/get-entrantes.usecases";

export class IngredienteApiAdapter extends Routes implements IngredientesApiPort {
    static readonly INGREDIENTES_ROUTE: string = "ingredientes";

    constructor(
        app: Application,
        private getIngredientesUseCase: GetIngredientesUseCase,
        private getIngredienteByIdUseCase: GetIngredientesByIdUseCase
    ) {
        super(IngredienteApiAdapter.INGREDIENTES_ROUTE);
        app.get(this.route, this.getIngredientes.bind(this));
        app.get(`${this.route}/:id`, this.getIngredienteById.bind(this));
    }

    public getIngredientes(req: Request, res: Response): void {
        this.getIngredientesUseCase.execute().then((ingredientes: Object[]) => {
            return res.json({ ingredientes });
        })
    }

    public getIngredienteById(req: Request, res: Response): void {
        this.getIngredienteByIdUseCase.execute(Number(req.params.id)).then((ingrediente: Ingrediente) => {
            return res.json({ ingrediente });
        })
    }

}