export class IngredienteDto {
    public id: number;
    public nombre: string;
    public cantidad: number;

    constructor(id: number = 0, nombre: string = "", cantidad: number = 0) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    // Métodos getter y setter para 'id'
    public getId(): number {
        return this.id;
    }

    // Métodos getter y setter para 'cliente'
    public getCliente(): string {
        return this.nombre;
    }

    public setCliente(nombre: string): void {
        this.nombre = nombre;
    }

    // Métodos getter y setter para 'cedula'
    public getCedula(): number {
        return this.cantidad;
    }

    public setCedula(cantidad: number): void {
        this.cantidad = cantidad;
    }
}