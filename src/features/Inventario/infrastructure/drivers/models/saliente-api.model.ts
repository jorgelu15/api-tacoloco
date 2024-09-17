import { IngredienteApi } from "./ingrediente-api.model"

export class SalientesApi {
    private ingrediente: IngredienteApi;
    private cantidad: number;
    private fecha_saliente: Date;
    constructor(
        ingrediente: IngredienteApi,
        cantidad: number,
        fecha_saliente: Date) {
        this.ingrediente = ingrediente;
        this.cantidad = cantidad;
        this.fecha_saliente = fecha_saliente;
    }

    public getIngredientes(): IngredienteApi {
        return this.ingrediente;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public getFecha_saliente(): Date {
        return this.fecha_saliente;
    }
}