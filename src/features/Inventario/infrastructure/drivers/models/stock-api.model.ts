import { IngredienteApi } from "./ingrediente-api.model";

export class StockApi {
    private ingrediente: IngredienteApi;
    private cantidad_actual: number;
    constructor(ingrediente: IngredienteApi, cantidad_actual: number) {
        this.ingrediente = ingrediente;
        this.cantidad_actual = cantidad_actual;
    }

    public getIngredientes(): IngredienteApi {
        return this.ingrediente;
    }

    public getCantidad_actual(): number {
        return this.cantidad_actual;
    }

}