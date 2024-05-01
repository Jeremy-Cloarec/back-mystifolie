"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = void 0;
const ActivityModel = (sequelize, DataTypes) => {
    return sequelize.define('Activitie', {
        id_activite: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            defaultValue: 'SENSAS'
        },
        min_personne: {
            type: DataTypes.INTEGER,
            defaultValue: 2
        },
        max_personne: {
            type: DataTypes.INTEGER,
        },
        prix_par_personne: {
            type: DataTypes.INTEGER,
            defaultValue: 30
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: 'SENSAS est un concept de divertissement français unique en son genre. Le but est de franchir la ligne d arrivée d un parcours sensoriel de 6 ateliers ! Vous redécouvrirez vos 5 sens à travers différents challenges délirants à vivre entre amis ou en famille.'
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        uptdateAt: true
    });
};
exports.ActivityModel = ActivityModel;
//# sourceMappingURL=activity.js.map