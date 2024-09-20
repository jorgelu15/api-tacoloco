import { Entrante } from "../../../../../shared/sequelize/models/entrante.model";
import { Ingrediente } from "../../../../../shared/sequelize/models/ingredientes.model";
import { EntranteRepository } from "../models/entrante-repository";
import { IngredienteRepository } from "../models/ingrediente-repository";
import { EntrantesRepositoryPort } from "../ports/entrantes-repository.port";

export class EntranteRepositoryAdapter implements EntrantesRepositoryPort {

    private entrantesRepository: EntranteRepository[] = [];
    constructor() {
    }

    async getIngredientes(): Promise<EntranteRepository[]> {
        try {
            const entrantes = await Entrante.findAll();
            this.entrantesRepository = entrantes.map((entrante) => entrante.toJSON());
            return Promise.resolve(this.entrantesRepository);
        } catch (err) {
            console.error('Error al obtener ingredientes:', err);
            this.entrantesRepository = []; // O manejar el error de otra manera
            return Promise.resolve(this.entrantesRepository);
        }

    }

    async getIngredienteById(id: number): Promise<EntranteRepository> {
        const entrante = this.entrantesRepository.find((ingrediente: EntranteRepository) => ingrediente.fk_ingrediente === id);
        if (!entrante) {
            throw new Error('Ingrediente no encontrado');
        }

        return Promise.resolve(entrante);
    }

    async saveIngrediente(entrante: EntranteRepository) {
        try {
            // Buscar si el ingrediente existe en la base de datos
            const ingredienteExistente: any = await Ingrediente.findByPk(entrante.fk_ingrediente);
            if (!ingredienteExistente) {
                throw new Error('Ingrediente no encontrado');
            }

            // Sumar la nueva cantidad a la cantidad existente
            const nuevaCantidad = ingredienteExistente.cantidad + entrante.cantidad;

            // Actualizar la cantidad del ingrediente existente
            await Ingrediente.update(
                { cantidad: nuevaCantidad },
                { where: { id: entrante.fk_ingrediente } }
            );

            // Crear una nueva entrada en la tabla "Entrante" relacionada con el ingrediente
            const newEntrante = await Entrante.create({
                fk_ingrediente: entrante.fk_ingrediente,
                cantidad: entrante.cantidad
            });

            // Guardar el nuevo registro en la base de datos
            await newEntrante.save();

            // Agregar el nuevo entrante al repositorio en memoria (si es necesario)
            this.entrantesRepository.push(entrante);

        } catch (error) {
            throw error; // Lanza el error para manejarlo en otra capa si es necesario
        }
    }

}