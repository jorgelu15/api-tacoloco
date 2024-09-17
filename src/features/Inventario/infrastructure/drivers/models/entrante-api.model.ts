import { IngredienteApi } from "./ingrediente-api.model";

export class EntranteApi {
    private ingrediente: IngredienteApi;
    private cantidad: number;
    private fecha_entrante: Date;

    constructor(
        ingrediente: IngredienteApi,
        cantidad: number,
        fecha_entrante: Date) {
        this.ingrediente = ingrediente;
        this.cantidad = cantidad;
        this.fecha_entrante = fecha_entrante;
    }


    public getIngrediente(): IngredienteApi {
        return this.ingrediente;
    }


    public getCantidad(): number {
        return this.cantidad;
    }

    public getFecha_entrante(): Date {
        return this.fecha_entrante;
    }
}