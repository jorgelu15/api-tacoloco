import { Sequelize } from 'sequelize';

export class DataBaseMysql {
    private sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize({
            host: 'localhost',
            database: 'chamoy_db',
            username: 'root',
            password: '',
            dialect: 'mariadb',
            logging: false, // Si quieres desactivar el logging de SQL en consola
        });

        this.testConnection();
    }

    private async testConnection() {
        try {
            await this.sequelize.authenticate();
            console.log('Conexión establecida con éxito.');
        } catch (error) {
            console.error('Error al conectar con la base de datos:', error);
        }
    }

    public getSequelizeInstance() {
        return this.sequelize;
    }

    public async closeConnection() {
        try {
            await this.sequelize.close();
            console.log('Conexión cerrada con éxito.');
        } catch (error) {
            console.error('Error al cerrar la conexión:', error);
        }
    }
}
