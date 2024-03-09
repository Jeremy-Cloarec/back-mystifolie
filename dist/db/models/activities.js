"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activities = void 0;
const activities_enums_1 = require("./activities-enums");
function Activities(sequelize, DataTypes) {
    return sequelize.define('Activitie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        adress: {
            type: DataTypes.STRING
        },
        cp: {
            type: DataTypes.INTEGER
        },
        city: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.ENUM(...Object.values(activities_enums_1.activitiesEnums))
        },
        budgetMin: {
            type: DataTypes.INTEGER
        },
        budgetMax: {
            type: DataTypes.INTEGER
        },
        nombreMin: {
            type: DataTypes.INTEGER
        },
        nombreMax: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        uptdateAt: true
    });
}
exports.Activities = Activities;
//# sourceMappingURL=activities.js.map