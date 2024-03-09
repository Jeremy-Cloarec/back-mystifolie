import { activitiesEnums } from './activities-enums'

export function Activities (sequelize, DataTypes) {
    const Activity = sequelize.define('Activitie', {
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
            type: DataTypes.ENUM(...Object.values(activitiesEnums))
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

    return Activity
}

