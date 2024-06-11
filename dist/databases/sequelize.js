"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssocClientActivity = exports.User = exports.Activity = exports.SynchroniseDB = exports.ConnectionDB = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const dataActivity_1 = require("../data/dataActivity");
const dataUser_1 = require("../data/dataUser");
const activity_model_1 = require("../models/activity.model");
Object.defineProperty(exports, "Activity", { enumerable: true, get: function () { return activity_model_1.Activity; } });
const user_model_1 = require("../models/user.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_model_1.User; } });
const assoc_client_activity_model_1 = require("../models/assoc_client_activity.model");
Object.defineProperty(exports, "AssocClientActivity", { enumerable: true, get: function () { return assoc_client_activity_model_1.AssocClientActivity; } });
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
let sequelize;
if (process.env.NODE_ENV === 'production') {
    sequelize = new sequelize_typescript_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        dialectOptions: {
            timezone: '+02:00'
        },
        logging: false
    });
}
else {
    sequelize = new sequelize_typescript_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        dialectOptions: {
            useUTC: false
        },
        logging: true,
        timezone: '+02:00'
    });
}
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
sequelize.addModels([
    activity_model_1.Activity,
    user_model_1.User,
    assoc_client_activity_model_1.AssocClientActivity
]);
//Synchronize model with db
async function SynchroniseDB() {
    try {
        await sequelize.sync({ force: true });
        await activity_model_1.Activity.bulkCreate(dataActivity_1.dataActivity);
        await user_model_1.User.bulkCreate(dataUser_1.dataUser);
        console.log('Yeah ! Success to synchronize database');
    }
    catch (error) {
        console.log('Oups ! Unable to synchronize to the database', error);
    }
}
exports.SynchroniseDB = SynchroniseDB;
//# sourceMappingURL=sequelize.js.map