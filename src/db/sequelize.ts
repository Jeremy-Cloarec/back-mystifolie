const { Sequelize, DataTypes } = require('sequelize')
import { dataActivitie } from '../json/dataActivitie'
import { ActivityModel } from '../models/activity'
import dotenv from 'dotenv'
dotenv.config();


let sequelize;

if (process.env.NODE_ENV === 'production') {
    // Make a new connexion
    sequelize = new Sequelize(
        "rznou9wwmzlmfy83",
        "liun3e423h6agphh",
        "nlhbmnpydbe2h4rz",
        {
            host: 'erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            dialect: 'mysql',
            dialectOptions: {
                timezone: '+00:00'
            },
            logging: false
        }
    );
} else {
    // Make a new connexion
    sequelize = new Sequelize(
        "mystifolie",
        "jeremy",
        "Hermitage93*",
        {
            host: 'localhost',
            dialect: 'mysql',
            dialectOptions: {
                useUTC: false
            },
            logging: true,
            timezone: '+04:00'
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










