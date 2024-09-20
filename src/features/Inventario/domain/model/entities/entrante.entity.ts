import { Ingrediente } from "../entities/ingrediente.entity";

export class Entrante {
    private id: number;
    private ingrediente: Ingrediente;
    private cantidad: number;
    private fecha_entrante: Date;

    constructor(
        id: number = 0,
        ingrediente: Ingrediente,
        cantidad: number = 0,
        fecha_entrante: Date = new Date()
    ) {
        this.id = id;
        this.ingrediente = ingrediente;
        this.cantidad = cantidad;
        this.fecha_entrante = fecha_entrante;
    }

    public getId(): number {
        return this.id;
    }

    public getIngrediente(): Ingrediente {
        return this.ingrediente;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public getFecha_entrante(): Date {
        return this.fecha_entrante;
    }
}