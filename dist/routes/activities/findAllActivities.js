"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../../db/sequelize");
function findAllActivitie(app) {
    app.get('/mystifolie/activites', async (req, res) => {
        try {
            const activities = await sequelize_1.Activity.findAll();
            console.log(activities); // Log the retrieved activities
            res.json(activities);
        }
        catch (error) {
            console.log('Oups ! Unable to retrieve activities from the database', error);
            res.status(500).send('Internal Server Error');
        }
    });
}
exports.default = findAllActivitie;
//# sourceMappingURL=findAllActivities.js.map