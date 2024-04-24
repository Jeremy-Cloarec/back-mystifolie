const { Sequelize, DataTypes } = require('sequelize')
import { dataActivitie } from '../json/dataActivitie'
import { ActivityModel } from '../models/activity'
import dotenv from 'dotenv'
dotenv.config();


let sequelize;

if (process.env.NODE_ENV === 'production') {
    // Make a new connexion
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: "mysql",
            dialectOptions: {
                timezone: '+02:00'
            },
            logging: true
        }
    );
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










