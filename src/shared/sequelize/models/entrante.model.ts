import { Model, DataTypes } from 'sequelize';
import { DataBaseMysql } from '../../db/Database.mysql';

class Entrante extends Model { }

Entrante.init({
    fk_ingrediente: DataTypes.INTEGER,
    cantidad: DataTypes.FLOAT,
    fecha_entrante: DataTypes.STRING,
}, {
    sequelize: new DataBaseMysql().getSequelizeInstance(),
    modelName: "entradas",
    timestamps: false
});

export { Entrante }