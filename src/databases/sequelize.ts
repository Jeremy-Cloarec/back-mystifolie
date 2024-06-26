import { Sequelize } from 'sequelize-typescript'
import { dataActivity } from '../data/dataActivity'
import { dataUser } from '../data/dataUser'
import { Activity } from '../models/activity.model'
import { User } from '../models/user.model'
import { AssocClientActivity } from '../models/assoc_client_activity.model'
import dotenv from 'dotenv'

dotenv.config();

let sequelize: Sequelize

if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
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

// Checking connexion with db
export async function ConnectionDB() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.log('Unable to connect to the database');
    }
}

sequelize.addModels([
    Activity,
    User,
    AssocClientActivity
]);

//Synchronize model with db
export async function SynchroniseDB() {
    try {
        await sequelize.sync( {force: true} )
        await Activity.bulkCreate(dataActivity);
        await User.bulkCreate(dataUser);

        console.log('Yeah ! Success to synchronize database');

    } catch (error) {
        console.log('Oups ! Unable to synchronize to the database', error);
    }
}

export { Activity, User, AssocClientActivity };










