"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynchroniseDB = exports.Activity = exports.ConnectionDB = void 0;
const tslib_1 = require("tslib");
const { Sequelize, DataTypes } = require('sequelize');
const dataActivitie_1 = require("../json/dataActivitie");
const activity_1 = require("../models/activity");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
let sequelize;
if (process.env.NODE_ENV === 'production') {
    // Make a new connexion
    sequelize = new Sequelize("rznou9wwmzlmfy83", "liun3e423h6agphh", "nlhbmnpydbe2h4rz", {
        host: 'erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        dialectOptions: {
            timezone: '+02:00'
        },
        logging: false
    });
}
else {
    // Make a new connexion
    sequelize = new Sequelize("mystifolie", "jeremy", "Hermitage93*", {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            timezone: 'Europe/Paris'
        },
        logging: true
    });
}
const activitieData = dataActivitie_1.dataActivitie;
// Checking connexion with db
async function ConnectionDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.log('Unable to connect to the database');
    }
}
exports.ConnectionDB = ConnectionDB;
exports.Activity = (0, activity_1.ActivityModel)(sequelize, DataTypes);
//Synchronize model with db
async function SynchroniseDB() {
    try {
        await sequelize.sync({ force: true });
        await exports.Activity.bulkCreate(activitieData);
        console.log('Yeah ! Success to synchronize database');
    }
    catch (error) {
        console.log('Oups ! Unable to synchronize to the database', error);
    }
}
exports.SynchroniseDB = SynchroniseDB;
//# sourceMappingURL=sequelize.js.map