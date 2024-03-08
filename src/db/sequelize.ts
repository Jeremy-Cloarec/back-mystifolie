
const { Sequelize } = require('sequelize')

export async function initDB() {

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

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}



