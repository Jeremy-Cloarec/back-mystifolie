"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = void 0;
const sequelize_1 = require("sequelize");
const activities_1 = require("./models/activities");
async function initDB() {
    try {
        const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: 'localhost',
            dialect: 'mysql',
            dialectOptions: {
                timezone: '+00:00'
            },
            logging: false
        });
        // Vérifier la connexion à la bdd
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // Importation du modèle dans la variable
        const Activitie = (0, activities_1.activities)(sequelize, sequelize_1.DataTypes);
        // Synchronisez le modèle avec la base de données
        await sequelize.sync({ force: true })
            .then(_ => {
            Activitie.create();
            console.log('La base de donnée a bien été synchronisée');
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
exports.initDB = initDB;
//# sourceMappingURL=sequelize.js.map