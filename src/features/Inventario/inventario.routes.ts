import { Application } from "express";
import { IngredienteApiAdapter } from "./infrastructure/drivers/adapters/ingredientes-api.adapter";
import { GetIngredientesUseCase } from "./application/usecases/get-ingredientes.usecases";
import { IngredienteRepositoryAdapter } from "./infrastructure/drivens/adapters/ingrediente-repository.adapter";
import { GetIngredientesByIdUseCase } from "./application/usecases/get-ingredientes-by-id.usescases";
import { GetEntrantesUseCase } from "./application/usecases/get-entrantes.usecases";
import { EntranteRepositoryAdapter } from "./infrastructure/drivens/adapters/entrante-repository.adapter";
import { IngredienteEntrantesApiAdapter } from "./infrastructure/drivers/adapters/ingredientes-entrantes-api.adapter";

export class InvetarioRoutes {

    constructor(private app: Application) {
        //drivens
        const IngredientesRepositoryAdapter = new IngredienteRepositoryAdapter();
        const EntrantesRepositoryAdapter = new EntranteRepositoryAdapter();

        //usecase
        const getIngredientesUseCase = new GetIngredientesUseCase(IngredientesRepositoryAdapter);
        const getIngredienteByIdUseCase = new GetIngredientesByIdUseCase(IngredientesRepositoryAdapter);
        const getEntrantesUseCase = new GetEntrantesUseCase(EntrantesRepositoryAdapter);

        //drivers
        new IngredienteApiAdapter(this.app, getIngredientesUseCase, getIngredienteByIdUseCase);
        new IngredienteEntrantesApiAdapter(this.app, getEntrantesUseCase);
    }
}