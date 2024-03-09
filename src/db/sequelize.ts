
import { DataTypes, Sequelize } from 'sequelize'
import { activities } from './models/activities'

export async function initDB() {
    try {
        const sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: 'localhost',
                dialect: 'mysql',
                dialectOptions: {
                    timezone: '+00:00'
                },
                logging: false
            }
        )
        // Vérifier la connexion à la bdd
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')

        // Importation du modèle dans la variable
        const Activitie = activities(sequelize, DataTypes)

        // Synchronisez le modèle avec la base de données
        await sequelize.sync({ force: true })
        .then(_ => {
            Activitie.create()
            console.log('Success to synchronize database');
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}



