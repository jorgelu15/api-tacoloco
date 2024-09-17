export class IngredienteApi {
    private id: number;
    private nombre: string;
    private medida: string;
    private cantidad: number;
    private costo: number;
    private categoria: string;

    constructor(
        id: number,
        nombre: string,
        medida: string,
        cantidad: number,
        costo: number,
        categoria: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.medida = medida;
        this.cantidad = cantidad;
        this.costo = costo;
        this.categoria = categoria;
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre
    }   

    public getMedida(): string {
        return this.medida
    }   

    public getCantidad(): number {
        return this.cantidad
    }   

    public getCosto(): number {
        return this.costo
    }   

    public getCategoria(): string {
        return this.categoria
    }   
    
}