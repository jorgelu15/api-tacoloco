import { Model, DataTypes } from 'sequelize';
import { DataBaseMysql } from '../../db/Database.mysql';

class Ingrediente extends Model { }

Ingrediente.init({
    nombre: DataTypes.STRING,
    medida: DataTypes.STRING,
    cantidad: DataTypes.FLOAT,
    costo: DataTypes.FLOAT,
    categoria: DataTypes.STRING,
}, {
    sequelize: new DataBaseMysql().getSequelizeInstance(),
    modelName: "ingredientes",
    timestamps: false
});

export { Ingrediente }