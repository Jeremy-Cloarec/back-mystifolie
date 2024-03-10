
const { Sequelize } = require('sequelize')
const Activity = require('./models/activity')

// Make a new connexion
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

// Checking connexion with db
export async function ConnectionDB() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.log('Unable to connect to the database');
    }
}
// Synchronize model with db
export async function SynchroniseDB() {
    try {
        sequelize.sync({ force: true })
        Activity.create()
        console.log('Success to synchronize database');
    } catch (error) {
        console.log('Unable to synchronize to the database');
    }
}





