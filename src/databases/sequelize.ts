import { Sequelize } from 'sequelize-typescript'
import { dataActivitie } from '../data/dataActivitie'
import { Activity } from '../models/activity'
import dotenv from 'dotenv'

dotenv.config();

let sequelize: Sequelize

if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(
        "rznou9wwmzlmfy83",
        "liun3e423h6agphh",
        "nlhbmnpydbe2h4rz",
        {
            host: 'erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            dialect: 'mysql',
            dialectOptions: {
                timezone: '+02:00'
            },
            logging: false
        }
    );
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            dialectOptions: {
                useUTC: false
            },
            logging: true,
            timezone: '+02:00'
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

sequelize.addModels([Activity]);

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

export { Activity }










