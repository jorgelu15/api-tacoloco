import { Ingrediente } from "../entities/ingrediente.entity";

export class EntranteDto {
    private id: number;
    private fk_ingrediente: number;
    private cantidad: number;
    private fecha_entrante: Date;

    constructor(
        id: number = 0,
        fk_ingrediente: number,
        cantidad: number = 0,
        fecha_entrante: Date = new Date()
    ) {
        this.id = id;
        this.fk_ingrediente = fk_ingrediente;
        this.cantidad = cantidad;
        this.fecha_entrante = fecha_entrante;
    }

    public getId(): number {
        return this.id;
    }

    public getIngrediente(): number {
        return this.fk_ingrediente;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public getFecha_entrante(): Date {
        return this.fecha_entrante;
    }
}