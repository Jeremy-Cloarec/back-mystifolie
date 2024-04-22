import { activitiesEnums } from './activities-enums'

export const ActivityModel = (sequelize, DataTypes) => {
    return sequelize.define('Activitie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: 'SENSAS'
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: 'SENSAS est un concept de divertissement français unique en son genre. Le but est de franchir la ligne d arrivée d un parcours sensoriel de 6 ateliers ! Vous redécouvrirez vos 5 sens à travers différents challenges délirants à vivre entre amis ou en famille.'
        },
        adress: {
            type: DataTypes.STRING,
            defaultValue: '14 rue Michel Felizat'
        },
        cp: {
            type: DataTypes.INTEGER,
            defaultValue: 69007
        },
        city: {
            type: DataTypes.STRING,
            defaultValue: 'Lyon'
        },
        type: {
            type: DataTypes.ENUM(...Object.values(activitiesEnums)),
            defaultValue: 'Aventure'
        },
        budgetMin: {
            type: DataTypes.INTEGER,
            defaultValue: 30
        },
        budgetMax: {
            type: DataTypes.INTEGER,
        },
        nombreMin: {
            type: DataTypes.INTEGER,
            defaultValue: 2
        },
        nombreMax: {
            type: DataTypes.INTEGER,
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        uptdateAt: true
    });

}


