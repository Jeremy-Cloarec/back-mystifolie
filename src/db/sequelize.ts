import { config } from 'dotenv';
config();

const { Sequelize, DataTypes } = require('sequelize')
import { dataActivitie } from '../json/dataActivitie'
import { ActivityModel } from '../models/activity';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } = process.env;

let sequelize;

if (process.env.NODE_ENV === 'production') {
    // Make a new connexion
    sequelize = new Sequelize(
        DB_NAME,
        DB_USER,
        DB_PASSWORD,
        {
            host: DB_HOST,
            dialect: DB_DIALECT,
            port: DB_PORT,
            dialectOptions: {
                timezone: '+02:00'
            },
            logging: true
        }
    )
} else {
    // Make a new connexion
    sequelize = new Sequelize(
        "mystifolie",
        "root",
        "",
        {
            host: 'localhost',
            dialect: 'mysql',
            dialectOptions: {
                timezone: '+02:00'
            },
            logging: false
        }
    )
}



const activitieData = dataActivitie

// Checking connexion with db
export async function ConnectionDB() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.log('Unable to connect to the database');
    }
}

export const Activity = ActivityModel(sequelize, DataTypes);

//Synchronize model with db
export async function SynchroniseDB() {
    try {
        await sequelize.sync({ force: true })
        await Activity.bulkCreate(activitieData);

        console.log('Yeah ! Success to synchronize database');

    } catch (error) {
        console.log('Oups ! Unable to synchronize to the database', error);
    }
}










