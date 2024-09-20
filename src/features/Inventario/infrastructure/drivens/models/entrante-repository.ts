export interface EntranteRepository {
    id: number;
    fk_ingrediente: number;
    cantidad: number;
    fecha_entrante: Date;
}